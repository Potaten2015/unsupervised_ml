close all;
clear all;
clc;

dataSets = LoadDataSets();

% for i=1:length(dataSets)
%     size(dataSets{i})
%     dist = pdist2(dataSets{i}, dataSets{i});
%     [RV,C,I,RI] = VAT(dist);
%     RV = RV ./ max(max(RV));
%     heatmap(RV);
%     colormap('gray');
%     shg;
% end

dataSet = dataSets{11};
size(dataSet)
dist = pdist2(dataSet, dataSet);
figure()
heat0 = heatmap(dist);
heat0.Title = 'Dataset 11 Dist Plot'
colormap('gray');
shg;
[RV,C,I,RI] = VAT(dist);
RV = RV ./ max(max(RV));
figure()
heat1 = heatmap(RV);
heat1.Title = 'Dataset 11 VAT'
colormap('gray');
shg;

[RiV,RV] = iVAT(dist, true);
RiV = RiV ./ max(max(RiV));
figure()
heat2 = heatmap(RiV);
heat2.Title = 'Dataset 11 iVAT'
colormap('gray');
shg;