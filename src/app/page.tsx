"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import ProductCardFive from '@/components/sections/product/ProductCardFive';
import ParallaxAbout from '@/components/sections/about/ParallaxAbout';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import SocialProofThree from '@/components/sections/socialProof/SocialProofThree';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseSocial from '@/components/sections/footer/FooterBaseSocial';
import { Anchor, Users, TrendingUp, Award, Wind, Waves, Crown, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function BoatPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="small"
      sizing="mediumSizeExtraLargeTitles"
      background="noise"
      cardStyle="floating"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="solid"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="BoatHub"
          navItems={[
            { name: "Featured", id: "featured" },
            { name: "Categories", id: "categories" },
            { name: "Pricing", id: "pricing" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Find Your Perfect Boat"
          description="Explore our premium collection of yachts, sailboats, and cruisers. Your next adventure awaits on the water."
          tag="Premium Selection"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765889998868-o9lhqlxy.jpg"
          imageAlt="Luxury yacht sailing on ocean"
          buttons={[
            { text: "Browse Inventory", href: "featured" },
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>
      
      <div id="featured" data-section="featured">
        <ProductCardFive
          title="Featured Boats"
          description="Check out our handpicked selection of premium vessels available now"
          tag="New Arrivals"
          products={[
            {
              id: "boat-1",
              button: { text: "View Details" },
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765889999863-vfd4n11q.jpg",
              imageAlt: "Modern speedboat with cabin",
              isFavorited: false
            },
            {
              id: "boat-2",
              button: { text: "View Details" },
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890000750-zf8a9mj2.jpg",
              imageAlt: "Classic sailboat with white sails",
              isFavorited: false
            },
            {
              id: "boat-3",
              button: { text: "View Details" },
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890001951-4dzim2mz.jpg",
              imageAlt: "Professional fishing boat",
              isFavorited: false
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="about" data-section="about">
        <ParallaxAbout
          title="Premium Boat Selection"
          description="We provide carefully curated vessels from leading manufacturers worldwide. Each boat is inspected and certified to ensure the highest standards of quality and safety. Our expert team helps you find the perfect match for your boating lifestyle."
          tag="About BoatHub"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890000750-zf8a9mj2.jpg"
          imageAlt="Premium boat collection"
          buttons={[
            { text: "Browse Categories", href: "categories" }
          ]}
        />
      </div>
      
      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Why Choose Us"
          description="Leading the marine marketplace with exceptional service and quality"
          metrics={[
            {
              id: "1",
              icon: Anchor,
              title: "Vessels",
              value: "500+"
            },
            {
              id: "2",
              icon: Users,
              title: "Happy Clients",
              value: "5000+"
            },
            {
              id: "3",
              icon: TrendingUp,
              title: "Years Experience",
              value: "25+"
            },
            {
              id: "4",
              icon: Award,
              title: "Industry Awards",
              value: "40+"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="What Our Customers Say"
          description="Real experiences from boat owners who found their perfect vessel with us"
          testimonials={[
            {
              id: "1",
              name: "Captain Michael Torres",
              handle: "Professional Sailor",
              testimonial: "BoatHub made finding my dream yacht incredibly easy. Their team understood exactly what I was looking for and guided me through every step. Highly recommend!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890004592-rjjkcf3x.jpg",
              imageAlt: "Captain Michael Torres"
            },
            {
              id: "2",
              name: "Sarah Anderson",
              handle: "Yacht Enthusiast",
              testimonial: "Outstanding service and genuine expertise. They connected me with a beautiful sailboat that exceeded all my expectations. Worth every moment!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890005526-gdl6xs8h.jpg",
              imageAlt: "Sarah Anderson"
            },
            {
              id: "3",
              name: "James Richardson",
              handle: "Cruise Explorer",
              testimonial: "Professional, knowledgeable, and always available to answer questions. Found my perfect family cruiser thanks to their dedicated team.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890006521-scc86of6.jpg",
              imageAlt: "James Richardson"
            },
            {
              id: "4",
              name: "Emma Wilson",
              handle: "Adventure Seeker",
              testimonial: "The entire process was smooth and transparent. BoatHub truly cares about matching you with the right boat. Fantastic experience!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890007297-e6kxqtry.jpg",
              imageAlt: "Emma Wilson"
            },
            {
              id: "5",
              name: "David Kumar",
              handle: "Boat Owner",
              testimonial: "Best decision I made was working with BoatHub. Their inventory is impressive and their support after sale is exceptional. Five stars!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890004592-rjjkcf3x.jpg",
              imageAlt: "David Kumar"
            },
            {
              id: "6",
              name: "Lisa Chen",
              handle: "Marine Enthusiast",
              testimonial: "I appreciated their honest assessments and fair pricing. The team went above and beyond to ensure I got the perfect boat for my needs.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890005526-gdl6xs8h.jpg",
              imageAlt: "Lisa Chen"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          speed={30}
        />
      </div>
      
      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Boat Categories & Pricing"
          description="Find the perfect vessel within your budget. All prices include inspection and certification."
          tag="Browse Plans"
          plans={[
            {
              id: "entry",
              badge: "Day Cruisers",
              badgeIcon: Wind,
              price: "$25k-75k",
              subtitle: "Perfect for weekend getaways",
              buttons: [
                { text: "Explore", href: "contact" }
              ],
              features: [
                "10-30 foot length",
                "Comfortable cabin",
                "Day cruising capability",
                "Easy maintenance"
              ]
            },
            {
              id: "pro",
              badge: "Sailboats",
              badgeIcon: Waves,
              price: "$50k-200k",
              subtitle: "For serious sailing enthusiasts",
              buttons: [
                { text: "Explore", href: "contact" }
              ],
              features: [
                "25-50 foot length",
                "Advanced rigging",
                "Extended range cruising",
                "Racing capabilities"
              ]
            },
            {
              id: "enterprise",
              badge: "Luxury Yachts",
              badgeIcon: Crown,
              price: "$200k+",
              subtitle: "Premium vessels for discerning buyers",
              buttons: [
                { text: "Explore", href: "contact" }
              ],
              features: [
                "40+ foot luxury vessels",
                "Full amenities",
                "Worldwide cruising",
                "Premium finishes"
              ]
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="social-proof" data-section="social-proof">
        <SocialProofThree
          title="Trusted by Leading Marine Brands"
          description="We work with the world's premier boat manufacturers and maritime companies"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890008433-gb7w8ceu.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890009223-5k65txtw.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890010109-byu5l671.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890010980-238ra49g.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890011578-xi57lf7x.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890012324-alu3k9hn.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890013120-0e8kacj2.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890013677-ksbg6j8t.jpg"
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          speed={40}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Common Questions"
          sideDescription="Everything you need to know about buying a boat"
          faqs={[
            {
              id: "1",
              title: "What's included in the boat purchase?",
              content: "All boats come with a full inspection, certification, basic maintenance package, and one year of technical support. Insurance and registration are handled separately."
            },
            {
              id: "2",
              title: "Do you offer financing options?",
              content: "Yes, we work with trusted marine lenders to provide competitive financing rates. Contact our team for personalized financing solutions based on your needs."
            },
            {
              id: "3",
              title: "Can I take a boat for a test drive?",
              content: "Absolutely! We encourage sea trials for any boat you're seriously considering. Schedule a trial with our team to experience your potential new vessel firsthand."
            },
            {
              id: "4",
              title: "What's the warranty coverage?",
              content: "We provide a 12-month structural warranty and 6-month systems warranty. Extended warranty options are available at additional cost."
            },
            {
              id: "5",
              title: "How do you handle boat delivery?",
              content: "We arrange professional delivery to your location. For local purchases, pickup is available at our marina. International shipping can be arranged with additional logistics coordination."
            },
            {
              id: "6",
              title: "What documents are required to purchase?",
              content: "Standard documents include valid ID, proof of address, and financial verification. Our team will guide you through the complete documentation process."
            }
          ]}
          useInvertedBackground="noInvert"
          textPosition="left"
          animationType="smooth"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Updates"
          title="Stay Connected"
          description="Subscribe to our newsletter for new boat listings, market insights, and exclusive offers delivered straight to your inbox."
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765890014431-r0x56rz7.jpg"
          imageAlt="Boats at marina"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBaseSocial
          logoText="BoatHub"
          description="Your trusted marketplace for premium boats and yachts worldwide. Find your perfect vessel today."
          copyrightText="© 2025 BoatHub. All rights reserved."
          columns={[
            {
              title: "Browse",
              items: [
                { label: "Featured Boats", href: "featured" },
                { label: "Categories", href: "categories" },
                { label: "Pricing", href: "pricing" },
                { label: "About Us", href: "about" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Contact Us", href: "contact" },
                { label: "Boat Care Guide", href: "#" },
                { label: "Maintenance Tips", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Terms of Service", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Cookie Policy", href: "#" },
                { label: "Disclaimer", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" },
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" },
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}