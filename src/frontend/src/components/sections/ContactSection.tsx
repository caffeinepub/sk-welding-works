import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Phone, Mail, MapPin, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/config/business';
import { useSubmitInquiry } from '@/hooks/useQueries';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submitInquiry = useSubmitInquiry();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await submitInquiry.mutateAsync(formData);
      toast.success('Thank you! We will contact you soon.');
      setFormData({ name: '', phone: '', message: '' });
      setErrors({});
    } catch (error) {
      toast.error('Failed to submit inquiry. Please try again or call us directly.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <section id="contact" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Get In Touch</h2>
          <div className="w-24 h-1 bg-accent-orange mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground">
            Ready to start your project? Contact us today for a free quote
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-card rounded-lg border border-border hover:border-accent-orange/50 transition-colors">
                  <Phone className="h-6 w-6 text-accent-orange flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a
                      href={`tel:${BUSINESS_CONFIG.phone}`}
                      className="text-muted-foreground hover:text-accent-orange transition-colors"
                    >
                      {BUSINESS_CONFIG.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-card rounded-lg border border-border hover:border-accent-orange/50 transition-colors">
                  <MessageCircle className="h-6 w-6 text-accent-orange flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <a
                      href={`https://wa.me/${BUSINESS_CONFIG.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent-orange transition-colors"
                    >
                      {BUSINESS_CONFIG.whatsapp}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-card rounded-lg border border-border hover:border-accent-orange/50 transition-colors">
                  <Mail className="h-6 w-6 text-accent-orange flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a
                      href={`mailto:${BUSINESS_CONFIG.email}`}
                      className="text-muted-foreground hover:text-accent-orange transition-colors"
                    >
                      {BUSINESS_CONFIG.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-card rounded-lg border border-border hover:border-accent-orange/50 transition-colors">
                  <MapPin className="h-6 w-6 text-accent-orange flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Workshop Address</h4>
                    <p className="text-muted-foreground">
                      {BUSINESS_CONFIG.address.street}
                      <br />
                      {BUSINESS_CONFIG.address.city}, {BUSINESS_CONFIG.address.zip}
                      <br />
                      {BUSINESS_CONFIG.address.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-2 ${errors.name ? 'border-destructive' : ''}`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`mt-2 ${errors.phone ? 'border-destructive' : ''}`}
                  placeholder="Your phone number"
                />
                {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
              </div>
              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`mt-2 min-h-[120px] ${errors.message ? 'border-destructive' : ''}`}
                  placeholder="Tell us about your project..."
                />
                {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={submitInquiry.isPending}>
                {submitInquiry.isPending ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
