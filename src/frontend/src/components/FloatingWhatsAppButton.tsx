import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/config/business';

const FloatingWhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=Hello! I'm interested in your welding services.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <Button
        size="lg"
        className="rounded-full h-14 w-14 shadow-2xl hover:shadow-3xl transition-all hover:scale-110 bg-[#25D366] hover:bg-[#20BA5A] text-white"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-background border border-border px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  );
};

export default FloatingWhatsAppButton;
