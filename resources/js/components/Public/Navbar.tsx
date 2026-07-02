import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { Menu, X, Phone, Mail, Globe } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MenuItem {
    id: number;
    name: string;
    url: string;
}

interface NavbarProps {
    menus: MenuItem[];
    settings: Record<string, string>;
}

export default function Navbar({ menus, settings }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
            {/* Top Bar */}
            {!isScrolled && (
                <div className="border-b border-white/10 pb-3 mb-3 hidden lg:block">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs text-white/80">
                        <div className="flex items-center space-x-6">
                            <span className="flex items-center gap-1.5">
                                <Phone className="w-3.5 h-3.5" />
                                {settings.contact_phone || '+62 21 1234 5678'}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Mail className="w-3.5 h-3.5" />
                                {settings.contact_email || 'info@arrbey.com'}
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="flex items-center gap-1">
                                <Globe className="w-3.5 h-3.5" />
                                ID / EN
                            </span>
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <span className={`text-2xl font-bold tracking-wider transition-colors duration-300 ${isScrolled ? 'text-teal-950' : 'text-white'}`}>
                            {settings.site_name || 'ARRBEY'}
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {menus.map((item) => (
                            <Link
                                key={item.id}
                                href={item.url}
                                className={`text-sm font-medium transition-colors duration-300 hover:text-teal-500 ${isScrolled ? 'text-teal-950' : 'text-white/90'}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className={cn(
                                buttonVariants({ variant: isScrolled ? 'default' : 'outline' }),
                                isScrolled ? 'bg-teal-900 hover:bg-teal-800 text-white' : 'border-white text-white hover:bg-white hover:text-teal-950'
                            )}
                        >
                            Let's Talk
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-md transition-colors duration-300 ${isScrolled ? 'text-teal-950 hover:bg-teal-50' : 'text-white hover:bg-white/10'}`}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-200 absolute top-full left-0 right-0 shadow-lg py-4 px-6 flex flex-col space-y-4">
                    {menus.map((item) => (
                        <Link
                            key={item.id}
                            href={item.url}
                            onClick={() => setIsOpen(false)}
                            className="text-base font-medium text-teal-950 hover:text-teal-600 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className={cn(
                            buttonVariants({ variant: 'default' }),
                            "bg-teal-900 hover:bg-teal-800 text-white w-full justify-center"
                        )}
                        onClick={() => setIsOpen(false)}
                    >
                        Let's Talk
                    </Link>
                </div>
            )}
        </header>
    );
}
