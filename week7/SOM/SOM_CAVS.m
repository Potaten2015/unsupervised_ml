
sD = som_read_data('Storage_Loss_Mod_SOM.txt');

sD = som_normalize(sD, 'var');
%make the SOM
sM = som_make(sD);
sM = som_autolabel(sM, sD, 'vote');

%basic visualization
som_show(sM, 'umat', 'all', 'comp', 1:1, 'empty', 'Labels', 'norm', 'd');
som_show_add('label', sM, 'subplot',3);

%denormalize the weight vectors
% M = som_denormalize(sM.codebook, sM);
% %make a cell array of marker types based on VGCNF samples
% colM = zeros(length(sM.codebook), 3);
% un = unique(sD.labels);
% for i = 1:3
%     ind = find(strcmp(sM.labels, un(i)));
%     colM(ind,i) =1;
%  end
% plot the map
% som_grid(sM, 'Coord', M(:, 2:4), 'MarkerSize', (M(:,1)-4)*5, 'Markercolor', colM);
% %plot the data on top
% hold on, grid on
% D = som_denormalize(sD.data, sD);
% som_grid('rect', [24 1], 'Coord', D(:, 1:15), 'Marker', 'x', ...
%     'MarkerSize', (D(:, 1)-4)*5, 'Line', 'none', 'Markercolor', colD);

%show the map grid and AHSS samples information
%som_cplane(sM.topol.lattice, sM.topol.msize, colM);
%show the 15 variables (features) with barcharts
%hold on
%som_barplane(sM.topol.lattice, sM.topol.msize, M, 'w', 'unitwise');