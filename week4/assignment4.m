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

dataSet = dataSets{1};
dist = pdist2(dataSet, dataSet);
[RV,C,I,RI] = VAT(dist);
RV = RV ./ max(max(RV));
heatmap(RV);
colormap('gray');
shg;

