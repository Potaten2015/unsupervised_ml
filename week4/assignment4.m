close all;
clear all;
clc;

datasets = LoadDataSets();

for i=1:length(datasets)
    dataset = datasets{i};
    R1 = dataset(:, 1);
    C1 = dataset(:, 2);
    datasetString = ['Dataset ' num2str(i)];
    try
        % Prep Figure
        ss = get(0,'screensize');
        fig = figure();
        set(fig, 'visible', 'off');
        fig.Position = [0, 0, ss(3), ss(4)];
        set(gca,'XColor', 'none','YColor','none')
        set(gca,'XTickLabel',[]);
        set(gca,'YTickLabel',[]);
        disableDefaultInteractivity(gca);
        
        % Datapoints
        s1 = subplot(2, 2, 1);
        s1.Position = [.05, .55, .4, .4];
        plot0 = plot(R1, C1, 'xk');
        title([datasetString ' Datapoints']);
        
        
        % Distances
        dist = pdist2(dataset, dataset);
        
        s2 = subplot(2, 2, 2);
        s2.Position = [.55, .55, .4, .4];
        set(s2,'xtick',[],'ytick',[])
        disableDefaultInteractivity(s2);
        
        heat0 = heatmap(dist);
        title([datasetString ' Dist Plot']);
        heat0.GridVisible = 'off';
        colormap('jet');
        heat0.XDisplayLabels = nan(size(heat0.XDisplayData));
        heat0.YDisplayLabels = nan(size(heat0.YDisplayData));
        
        % VAT
        [RV1,C,I,RI] = VAT(dist);
        RV1 = RV1 ./ max(max(RV1));
        
        s3 = subplot(2, 2, 3);
        s3.Position = [.05, .05, .4, .4];
        disableDefaultInteractivity(gca);
        heat1 = heatmap(RV1);
        title([datasetString ' VAT']);
        heat1.GridVisible = 'off';
        colormap('jet');
        heat1.XDisplayLabels = nan(size(heat1.XDisplayData));
        heat1.YDisplayLabels = nan(size(heat1.YDisplayData));
        
        
        % iVAT
        [RiV,RV2] = iVAT(RV1, true);
        RiV = RiV ./ max(max(RiV));
        
        s4 = subplot(2, 2, 4);
        s4.Position = [.55, .05, .4, .4];
        disableDefaultInteractivity(gca);
        heat2 = heatmap(RiV);
        title([datasetString ' iVAT']);
        heat2.GridVisible = 'off';
        colormap('jet');
        heat2.XDisplayLabels = nan(size(heat2.XDisplayData));
        heat2.YDisplayLabels = nan(size(heat2.YDisplayData));
        
        saveas(fig, ['dataset_' num2str(i) '_results.png']);
    catch exception
        i
        size(dataset)
        exception
    end
end