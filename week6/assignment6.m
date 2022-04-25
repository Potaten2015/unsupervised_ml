% Assignment 5
% Taten Knight

% Cleanup
close all;
clear all;
clc;

numClusters = [4, 5, 0, 0, 3, 3, 2, 2, 2, 2, 2, 2]; % From assignment 4
datasets = LoadDataSets(); % Load all datasets
memberships = cell(length(numClusters), 1);
clusters = memberships;
% Partition Coefficient
pc = zeros(length(numClusters), 10);
pcFinal = zeros(length(numClusters), 1);
% Classification Entropy
ce = pc;
ceFinal = pcFinal;
% CS
cs = ce;
csFinal = ceFinal;
for m=1:length(numClusters)
    if numClusters(m) ~= 0
        memberships{m} = cell(10, 1);
        clusters{m} = memberships{m};
        for C=2:10
            memberships{m}{C} = readtable(['membership_dataset_' num2str(m) '_clusters_' num2str(C) '.xlsx']);
            clusters{m}{C} = readtable(['clusters_dataset_' num2str(m) '_clusters_' num2str(C) '.xlsx']); 
        end
    end
end



for setNum=1:length(numClusters)
    if numClusters(setNum) ~= 0
        % Input Data
        for C = 2:10
            testSet = datasets{setNum};
            testMemb = memberships{setNum}{C}{:, :};
            testClust = clusters{setNum}{C}{:, :};
            dims = size(testSet);
            n = dims(1); % Number of datapoints
            d = dims(2); % Dimensions of data
            
            % PC
            membershipSquared = testMemb .* testMemb;
            membershipSquaredSummed = sum(sum(membershipSquared));
            pcVal = membershipSquaredSummed / numel(membershipSquared);
            pc(setNum, C) = pcVal;
            
            % CE
            membLogged = testMemb .* log(testMemb);
            membLoggedSummed = sum(sum(membLogged));
            ceVal = membLoggedSummed / numel(membLogged);
            ce(setNum, C) = -1 * ceVal;
            
            % CS
            numSum = 0;
            denSum = 0;
            clusterDistances = sqrt(pdist2(testClust, testClust));
            for c = 1:C
                clusterElements = testSet(testMemb(c, :) > .5, :);
                distances = sqrt(pdist2(clusterElements, clusterElements));
                scatterSum = 0;
                for j = 1:numel(clusterElements(:, 1))
                    maxScatter = max(distances(j, :));
                    scatterSum = scatterSum + maxScatter;
                end
                scatterSum = scatterSum / length(clusterElements(:, 1));
                numSum = numSum + scatterSum;
                for cden = 1:C
                    clusterDistance = clusterDistances(c, :);
                    clusterDistance(c) = [];
                    minClusterDistance = min(clusterDistance);
                    denSum = denSum + minClusterDistance;
                end
            end
            cs(setNum, C) = numSum / denSum;
            
        end
    end
    tempPc = pc(:, 2:end);
    [holder1, pcI] = min(tempPc(setNum, :));
    pcFinal(setNum) = pcI + 1;
    
    tempCe = ce(:, 2:end);
    [holder2, ceI] = min(tempCe(setNum, :));
    ceFinal(setNum) = ceI + 1;
    
    tempCs = cs(:, 2:end);
    [holder3, csI] = min(tempCs(setNum, :));
    csFinal(setNum) = csI + 1;
end

fig = figure();
heat0 = heatmap(cs);
title('CS');
heat0.GridVisible = 'off';
colormap('jet');
heat0.XDisplayLabels = nan(size(heat0.XDisplayData));
heat0.YDisplayLabels = nan(size(heat0.YDisplayData));
saveas(fig, 'cs.png');

fig = figure();
heat1 = heatmap(pc);
title('pc');
heat0.GridVisible = 'off';
colormap('jet');
heat1.XDisplayLabels = nan(size(heat1.XDisplayData));
heat1.YDisplayLabels = nan(size(heat1.YDisplayData));
saveas(fig, 'pc.png');

fig = figure();
heat2 = heatmap(ce);
title('CE');
heat2.GridVisible = 'off';
colormap('jet');
heat2.XDisplayLabels = nan(size(heat2.XDisplayData));
heat2.YDisplayLabels = nan(size(heat2.YDisplayData));
saveas(fig, 'ce.png');