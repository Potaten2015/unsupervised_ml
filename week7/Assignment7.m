% Assignment 7
% Taten Knight

% Cleanup
clear all;
close all;
clc;

% Copied and updated from TSP_SOMS file
% Setup
numPoints = 10;
x = rand(numPoints, 2);
differentStarts = 2;
wStarts = cell(1, differentStarts);
for starts = 1:differentStarts
    wStarts{starts} = rand(numPoints,2);
end
convergence=.001;
sigmaMax = 3;
diffs = cell(1, sigmaMax + 1);
tau = 200;

if numPoints < 2 * sigmaMax + 1
    throw(MException('InputError:numPoints_nhMax', 'numpoints must be greater than or equal to 2 * nhMax + 1'))
end

% Run with different numbers of neighbors
for sigma0 = 0:sigmaMax
    for start = 1:differentStarts
        weights = [];
        diff=10;
        w = wStarts{start};
        %TSP using SOM
        titleString = ['points-' num2str(numPoints) '-neighborhood-' num2str(sigma0) '-convergence-' num2str(convergence) '-weightVector-' num2str(start)];
        fig = figure();

        % Iterative Loop
        its = 0;
        while diff>convergence
            its = its + 1;
            if size(weights) == 0
                weights(:, : , end) = w;
            else
                weights(:, : , end + 1) = w;
            end
            % Save old weights
            oldw=w;

            % Change order that we check node with
            order=randperm(numPoints);

            % For each node
            for i=1:numPoints
                % Distance vector = the distance between a random x and the weight,
                % w
                d=ones(numPoints,1)*x(order(i),:)-w;
                d=(d(:,1).^2+d(:,2).^2).^0.5;
                % m2 is the index of the vector with the minimum distance (aka the
                % closest node to the datapoint
                [m1 m2]=min(d);
                % Update the weight vectors within the neighborhood of the winning
                % vector (+-2)
                sigma = sigma0 * exp(-its / tau);

                for d1=m2-floor(sigma):m2+floor(sigma)
                    d = abs(d1 - m2);
                    if d == 0
                        h = 1;
                    else
                        h = exp(- (d^2) / (2 * (sigma ^ 2)));
                    end
                    modD1 = mod(d1, numPoints);
                    if d1 == 0 || d1 == numPoints
                        modD1 = numPoints;
                     end
                    w(modD1,:)=w(modD1,:)+h*(x(order(i),:)-w(modD1,:));
                end
            end
            % Calculate the current change in w
            diff=norm(oldw-w);
            diffs{sigma0 + 1} = [diffs{sigma0 + 1} diff];
        end
    %     plot(w(:,1),w(:,2),'r-o', 'LineWidth', 1, 'MarkerFaceColor', 'g', 'Color', 'g')
        weightsSize = size(weights);
        iters = weightsSize(3);
        for j = 1:iters
            roundedJ = round(j);
            color =  [1 - (j / iters), j / iters, 0];
            plot(x(:,1),x(:,2),'o', 'MarkerSize', 15, 'MarkerEdgeColor', 'k')
            title(titleString);
            axis([0 1 0 1])
            hold on
            for i = 1:numPoints
                text(x(i,1),x(i,2)+0.02,['C' num2str(i)])
            end
            plot(weights(:,1, roundedJ),weights(:,2, roundedJ),'r-o', 'LineWidth', .1, 'MarkerFaceColor', color, 'Color', color)
            frame = frame2im(getframe(fig));
            [A,map] = rgb2ind(frame,256);
            if j == 1
                imwrite(A,map,[titleString '.gif'],'gif','LoopCount', Inf ,'DelayTime', 3);
            elseif j == iters
                imwrite(A,map,[titleString '.gif'],'gif','WriteMode','append','DelayTime', 5);
            else
                imwrite(A,map,[titleString '.gif'],'gif','WriteMode','append','DelayTime', 10 / iters);
            end
            hold off
        end
    end
end

close all;