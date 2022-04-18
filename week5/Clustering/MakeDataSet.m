function [ X ] = MakeDataSet( filename )

    Img = imread(filename);
    
    [R C] = find( Img == 0 );
    
    X = [ R C ];

end