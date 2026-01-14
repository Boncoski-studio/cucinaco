import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, Clock, Check, ChevronLeft, ChevronRight, Minus, Plus } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { useToast } from '@/hooks/use-toast';
import { TIME_SLOTS } from '@/data/menuData';
import { format, addDays, isBefore, startOfToday } from 'date-fns';

interface ReservationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ReservationDialog = ({ open, onOpenChange }: ReservationDialogProps) => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [guests, setGuests] = useState(2);
  const [time, setTime] = useState<string | undefined>(undefined);

  const handleConfirm = () => {
    toast({
      title: "Booking Confirmed!",
      description: `Your table for ${guests} on ${format(date!, 'MMMM d, yyyy')} at ${time} has been reserved. Check your email for confirmation.`,
    });
    onOpenChange(false);
    // Reset form
    setTimeout(() => {
      setStep(1);
      setDate(undefined);
      setGuests(2);
      setTime(undefined);
    }, 300);
  };

  const canProceed = () => {
    if (step === 1) return !!date;
    if (step === 2) return guests >= 1;
    if (step === 3) return !!time;
    return false;
  };

  const steps = [
    { number: 1, label: 'Date', icon: Calendar },
    { number: 2, label: 'Guests', icon: Users },
    { number: 3, label: 'Time', icon: Clock },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg p-0 overflow-hidden bg-cream border-0">
        <DialogHeader className="p-6 pb-4 bg-charcoal text-cream">
          <DialogTitle className="font-display text-2xl text-center">
            Reserve Your Table
          </DialogTitle>
          
          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4 mt-6">
            {steps.map((s, i) => (
              <div key={s.number} className="flex items-center">
                <div 
                  className={`flex items-center justify-center w-10 h-10 rounded-full transition-all ${
                    step >= s.number 
                      ? 'bg-gold text-charcoal' 
                      : 'bg-cream/20 text-cream/50'
                  }`}
                >
                  {step > s.number ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <s.icon className="w-5 h-5" />
                  )}
                </div>
                {i < steps.length - 1 && (
                  <div 
                    className={`w-12 h-0.5 mx-2 transition-colors ${
                      step > s.number ? 'bg-gold' : 'bg-cream/20'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </DialogHeader>

        <div className="p-6 min-h-[360px]">
          <AnimatePresence mode="wait">
            {/* Step 1: Date Selection */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <h3 className="font-display text-xl text-charcoal mb-6">
                  Select a Date
                </h3>
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => isBefore(date, startOfToday())}
                  className="rounded-lg border border-charcoal/10 pointer-events-auto"
                />
              </motion.div>
            )}

            {/* Step 2: Guest Count */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <h3 className="font-display text-xl text-charcoal mb-8">
                  Number of Guests
                </h3>
                <div className="flex items-center gap-8">
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-14 h-14 rounded-full bg-charcoal/10 hover:bg-charcoal/20 flex items-center justify-center transition-colors disabled:opacity-50"
                    disabled={guests <= 1}
                  >
                    <Minus className="w-6 h-6 text-charcoal" />
                  </button>
                  <div className="text-center">
                    <span className="font-display text-6xl text-charcoal block">
                      {guests}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {guests === 1 ? 'Guest' : 'Guests'}
                    </span>
                  </div>
                  <button
                    onClick={() => setGuests(Math.min(12, guests + 1))}
                    className="w-14 h-14 rounded-full bg-charcoal/10 hover:bg-charcoal/20 flex items-center justify-center transition-colors disabled:opacity-50"
                    disabled={guests >= 12}
                  >
                    <Plus className="w-6 h-6 text-charcoal" />
                  </button>
                </div>
                <p className="text-muted-foreground text-sm mt-6">
                  For parties larger than 12, please call us directly.
                </p>
              </motion.div>
            )}

            {/* Step 3: Time Selection */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <h3 className="font-display text-xl text-charcoal mb-2">
                  Select a Time
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {date && format(date, 'EEEE, MMMM d, yyyy')}
                </p>
                <div className="grid grid-cols-4 gap-3 w-full max-w-sm">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setTime(slot)}
                      className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                        time === slot
                          ? 'bg-gold text-charcoal shadow-gold'
                          : 'bg-charcoal/5 text-charcoal hover:bg-charcoal/10'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Navigation */}
        <div className="p-6 pt-0 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => setStep(Math.max(1, step - 1))}
            disabled={step === 1}
            className="text-charcoal hover:bg-charcoal/5"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back
          </Button>

          {step < 3 ? (
            <Button
              onClick={() => setStep(step + 1)}
              disabled={!canProceed()}
              className="bg-charcoal text-cream hover:bg-charcoal/90"
            >
              Continue
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          ) : (
            <Button
              onClick={handleConfirm}
              disabled={!canProceed()}
              className="bg-gold hover:bg-gold-light text-charcoal shadow-gold"
            >
              Confirm Booking
              <Check className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReservationDialog;
