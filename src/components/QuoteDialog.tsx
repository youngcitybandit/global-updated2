
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface QuoteDialogProps {
  trigger?: React.ReactNode;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const QuoteDialog = ({ trigger, defaultOpen, onOpenChange }: QuoteDialogProps) => {
  const [formState, setFormState] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormState(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - could be expanded later
    console.log("Form submitted:", formState);
    // Would typically send this to an API endpoint
  };

  return (
    <Dialog defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        <div className="bg-white p-6 sm:p-8 rounded-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-agr-navy">Request a Free Quote</h2>
            {/* Removed the duplicate close button that was here */}
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</Label>
                <Input
                  id="firstName"
                  value={formState.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agr-blue"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</Label>
                <Input
                  id="lastName"
                  value={formState.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agr-blue"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agr-blue"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formState.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agr-blue"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="zipCode" className="text-sm font-medium text-gray-700">ZIP Code</Label>
              <Input
                id="zipCode"
                value={formState.zipCode}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agr-blue"
              />
            </div>
            
            <div className="pt-2">
              <Button 
                type="submit" 
                className="w-full bg-agr-navy hover:bg-agr-navy/80 text-white py-3 font-medium rounded-md"
              >
                Get Your Free Quote
              </Button>
            </div>
            
            <p className="text-xs text-gray-500 text-center mt-2">
              By submitting, you agree to our <a href="#" className="text-agr-blue underline">privacy policy</a> and consent to be contacted regarding insurance.
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteDialog;
