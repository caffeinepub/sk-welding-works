import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const GallerySection = () => {
  const images = [
    {
      src: '/assets/generated/gallery-welding-sparks.dim_1200x800.png',
      alt: 'Welding sparks in action',
      title: 'Professional Welding'
    },
    {
      src: '/assets/generated/gallery-workshop-machines.dim_1200x800.png',
      alt: 'Modern workshop machines',
      title: 'Modern Equipment'
    },
    {
      src: '/assets/generated/gallery-gate-grill.dim_1200x800.png',
      alt: 'Custom gate and grill work',
      title: 'Gate & Grill Fabrication'
    },
    {
      src: '/assets/generated/gallery-pipe-bending.dim_1200x800.png',
      alt: 'Pipe bending machine work',
      title: 'Pipe Bending Services'
    },
    {
      src: '/assets/generated/gallery-metal-frames.dim_1200x800.png',
      alt: 'Metal frame structures',
      title: 'Metal Frame Construction'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Our Work</h2>
          <div className="w-24 h-1 bg-accent-orange mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground">
            Quality craftsmanship in every project we undertake
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="group relative overflow-hidden rounded-lg cursor-pointer border-2 border-border hover:border-accent-orange/50 transition-all">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="text-lg font-semibold text-foreground">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <img src={image.src} alt={image.alt} className="w-full h-auto rounded-lg" />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
