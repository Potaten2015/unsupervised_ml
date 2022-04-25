% Assignment 5
% Taten Knight

% Cleanup
close all;
clear all;
clc;

numClusters = [4, 5, 0, 0, 3, 3, 2, 2, 2, 2, 2, 2]; % From assignment 4
datasets = LoadDataSets(); % Load all datasets

colors = [	[1 0 0]; ...
    [0 1 0]; ...
    [0 0 1]; ...
    [0 1 1]; ...
    [1 0 1]; ...
    [1 1 0]; ...
    [0 0.4470 0.7410]; ...
    [0.8500 0.3250 0.0980]; ...
    [0.9290 0.6940 0.1250]; ...
    [0.4940 0.1840 0.5560]];


for setNum=1:length(numClusters)
    if numClusters(setNum) ~= 0
        % Input Data

        testSet = datasets{setNum};
        dims = size(testSet);
        n = dims(1); % Number of datapoints
        d = dims(2); % Dimensions of data
        
        for C = 2:10
            its = 30; % Max iterations
            Q = 1.5; % Fuzzifier

            pd = makedist('normal');

            u = zeros(C, n);
            for i=1:n
                w = abs(random(pd,[C, 1]));
                w = w ./ sum(w);
                u(:, i) = w;
            end

            % u = repelem(w, 1, n); % Initialize membership matrix

            cc = testSet(1:C, :); % Initialize cluster centers

            % Prep Figure
            datasetString = ['dataset_' num2str(setNum) '_clusters_' num2str(C)];
            ss = get(0,'screensize');
            fig = figure();
            set(fig, 'visible', 'off');
            fig.Position = [0, 0, ss(3), ss(4)];
            set(gca,'XColor', 'none','YColor','none')
            set(gca,'XTickLabel',[]);
            set(gca,'YTickLabel',[]);
            disableDefaultInteractivity(gca);

            dist = [];

            for it=1:its
                % Distances
                dist(:, :, it) = pdist2(cc, testSet);
                for i=1:C
                    vi = zeros(1, d);
                    num = vi;
                    den = 0;
                    for j=1:n
                        num = num + ((u(i,  j)^Q) .* testSet(j, :));
                        den = den + (u(i, j)^Q);
                    end
                    cc(i, :) = num ./ den;
                    hold on
                    scatter(cc(i, 1), cc(i,2), 10 + (it / its * 300), 'ok', 'MarkerFaceColor', colors(i, :));
                    hold on
                end

                for i=1:n
                    for j=1:C
                        uSum = 0;
                        for k=1:C
                            uSum = uSum + (dist(j, i, it) / dist(k, i, it)) ^ (1 / (Q - 1));
                        end
                        u(j, i) = 1 / uSum;
                    end
                end
                if not(isnan(sum(sum(cc))))
                    cc_table = array2table(cc);
                    cluster_filename = ['clusters_dataset_' num2str(setNum) '_clusters_' num2str(C) '.xlsx'];
                    writetable(cc_table, cluster_filename);
                end
                if not(isnan(sum(sum(u))))
                    u_table = array2table(u);
                    u_filename = ['membership_dataset_' num2str(setNum) '_clusters_' num2str(C) '.xlsx'];
                    writetable(u_table, u_filename);
                end
                if it > 1
                    if sum(sum(abs(dist(:, :, it) - dist(:, :, it - 1)))) < 2
                        break
                    end
                end
            end

            [argvalue, argmax] = max(u);

            % Datapoints
            R1 = testSet(:, 1);
            C1 = testSet(:, 2);
            % s1 = subplot(2, 2, 1);
            % s1.Position = [.05, .55, .4, .4];
            allBelongs = zeros(1, n);
            threshold = .50;
            for i=1:C
                hold on
                inCluster = argmax == i;
                meetThreshold = argvalue > threshold;
                belongs = inCluster .* meetThreshold;
                allBelongs = belongs + allBelongs;
                plot0 = plot(R1(belongs == 1), C1(belongs == 1), 'x', 'MarkerEdgeColor', colors(i, :), 'MarkerFaceColor', colors(i, :));
                hold on
            end

            noCluster = [R1(allBelongs == 0), C1(allBelongs == 0)];

            plot(noCluster(:, 1), noCluster(:, 2), 'xk')
            title([datasetString ' Threshold membership: ' num2str(threshold * 100) '%'])
            saveas(fig, ['dataset_' num2str(setNum) '_clusters_' num2str(C) '_threshold_' num2str(threshold * 100) '.png'])
        end
    end
end

