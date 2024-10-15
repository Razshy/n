import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';
import { Button } from './ui/button';
import { PlusCircle } from 'lucide-react';

interface Listing {
  id: number;
  title: string;
  image: string;
  price: string;
  sold: boolean;
}

interface ListingsTabProps {
  listings: Listing[];
}

const ListingsTab: React.FC<ListingsTabProps> = ({ listings }) => {
  return (
    <Card className="bg-[#1c1c1c] border-none mb-6">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-[#cdccf6] flex items-center justify-between">
          Things
          <Badge className="text-xs font-normal bg-[#2B2A2B] text-gray-300 hover:bg-[#2B2A2B]">
            12 Things 
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          {listings.slice(0, 4).map((listing) => (
            <div
              key={listing.id}
              className="relative aspect-square rounded-md overflow-hidden bg-[#2b2b2a]"
            >
              {listing.sold && (
                <div className="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                  Sold
                </div>
              )}
              <Image 
                src={listing.image} 
                alt={listing.title} 
                layout="fill" 
                objectFit="cover" 
                className="rounded-md"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                <h3 className="text-sm font-semibold text-white truncate">{listing.title}</h3>
                <p className="text-xs font-bold text-white">{listing.price}</p>
              </div>
            </div>
          ))}
        </div>
        <Button 
          variant="outline" 
          className="w-full mt-4 bg-[#2b2b2a] text-[#cdccf6] border-[#cdccf6] hover:bg-[#cdccf6] hover:text-[#1c1c1c]"
        >
          <PlusCircle className="w-4 h-4 mr-2" />
          Add New Listing
        </Button>
      </CardContent>
    </Card>
  );
};

export default ListingsTab;