%% Assignment 7
% Taten Knight              c

%% Cleanup
clear all;
close all;
clc;

%% Copied and updated from TSP_SOMS file
% Setup
numPoints = 10;
x = rand(numPoints, 2);
wStart=rand(numPoints,2);
alp=1;
convergence=.01;
nhFraction = .3; % What fraction of difference the neighbors move towards the winner
nhMax = 2;
diffs = cell(1, nhMax + 1);

if numPoints < 2 * nhMax + 1
    throw(MException('InputError:numPoints_nhMax', 'numpoints must be greater than or equal to 2 * nhMax + 1'))
end

%% Run with different numbers of neighbors
for nh = 0:nhMax
    nh
    weights = [];
    diff=10;
    w = wStart;
    %TSP using SOM
    titleString = ['points-' num2str(numPoints) '-neighborhood-' num2str(nh) '-alpha-' num2str(alp) '-convergence-' num2str(convergence)];
    fig = figure();
    plot(x(:,1),x(:,2),'o', 'MarkerSize', 15, 'MarkerEdgeColor', 'k')
    title(titleString);
    axis([0 1 0 1])
    hold on
    for i = 1:numPoints
        text(x(i,1),x(i,2)+0.02,['C' num2str(i)])
    end

    % Iterative Loop
    while diff>convergence
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
            for d1=m2-nh:m2+nh
                modD1 = mod(d1, numPoints);
                if d1 == 0 || d1 == numPoints
                    modD1 = numPoints;
                 end
                w(modD1,:)=w(modD1,:)+alp*(nhFraction ^ abs(d1 - m2))*(x(order(i),:)-w(modD1,:));
            end
        end
        % Calculate the current change in w
        diff=norm(oldw-w);
        diffs{nh + 1} = [diffs{nh + 1} diff];
    end
%     plot(w(:,1),w(:,2),'r-o', 'LineWidth', 1, 'MarkerFaceColor', 'g', 'Color', 'g')
    weightsSize = size(weights);
    iters = weightsSize(3);
    for j = linspace(1, iters, 100)
        roundedJ = round(j);
        color =  [1 - (j / iters), j / iters, 0];
        plot(weights(:,1, roundedJ),weights(:,2, roundedJ),'r-o', 'LineWidth', .1, 'MarkerFaceColor', color, 'Color', color)
        hold on
    end
    
end