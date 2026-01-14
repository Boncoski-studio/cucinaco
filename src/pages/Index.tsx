import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import ReservationDialog from '@/components/ReservationDialog';
import Footer from '@/components/Footer';

const Index = () => {
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onBookTable={() => setReservationOpen(true)} />
      <Hero onBookTable={() => setReservationOpen(true)} />
      <MenuSection />
      <Footer />
      <ReservationDialog 
        open={reservationOpen} 
        onOpenChange={setReservationOpen} 
      />
    </div>
  );
};

export default Index;
