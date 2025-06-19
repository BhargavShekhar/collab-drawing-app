"use client"

import React, { useEffect, useState } from 'react';
import { Session } from 'next-auth';
import { Feather } from 'lucide-react';
import { getSession } from 'next-auth/react';
import { GridPattern } from '@/components/Home/GridPattern';
import { ParticleField } from '@/components/Home/ParticleField';
import { FloatingShape } from '@/components/Home/FloatingShape';
import Footer from '@/components/Home/Footer';
import Navigation from '@/components/Home/Navigation';
import Hero from '@/components/Home/Hero';

const HomePage = () => {
	const [session, setSession] = useState<Session | null>(null);
	const [isSignedIn, setIsSignedIn] = useState(false);

	useEffect(() => {
		const fetchSession = async () => {
			const mySesstion = await getSession();
			setSession(mySesstion);
		}
		fetchSession();
	}, []);

	useEffect(() => {
		if (session) setIsSignedIn(true);
		else setIsSignedIn(false);
	}, [session]);

	return (
		<div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 z-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20" />
        
        <GridPattern />        
        <ParticleField count={30} />
        
        <FloatingShape delay={0} duration={25} size={60} color="blue" />
        <FloatingShape delay={5} duration={30} size={40} color="purple" />
        <FloatingShape delay={10} duration={20} size={80} color="green" />
        <FloatingShape delay={15} duration={35} size={50} color="blue" />
        <FloatingShape delay={20} duration={25} size={35} color="purple" />
        
        {/* Radial Gradient Spots */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-green-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '3s' }} />
        
        {/* Subtle Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse" style={{ animationDuration: '3s' }} />
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        </div>
      </div>

      <Navigation session={session} isSignedIn />
      <Hero isSignedIn />
      <Feather />
      <Footer />
    </div>
	);
};

export default HomePage;