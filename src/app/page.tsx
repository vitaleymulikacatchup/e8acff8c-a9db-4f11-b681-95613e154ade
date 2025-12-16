"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroShowcaseSplitOverlay from '@/components/sections/hero/HeroShowcaseSplitOverlay';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import ProductCardSeven from '@/components/sections/product/ProductCardSeven';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import MetricCardEight from '@/components/sections/metrics/MetricCardEight';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="small"
      sizing="largeSizeExtraLargeSpacing"
      background="aurora"
      cardStyle="noise-gradient"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "About", id: "about" },
            { name: "Attractions", id: "attractions" },
            { name: "History", id: "history" },
            { name: "Culture", id: "culture" }
          ]}
          brandName="Zaporizhzhya"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765883136159-byskwizy.jpg"
          logoAlt="Zaporizhzhya city logo"
          button={{
            text: "Plan Your Visit",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroShowcaseSplitOverlay
          title="Discover Zaporizhzhya - The Jewel of Ukraine"
          description="Experience the beauty, history, and vibrant culture of one of Ukraine's most captivating cities. From the legendary island of Khortytsia to the scenic Dnieper River, explore attractions that connect past and present."
          tags={["Historic City", "Cultural Heritage", "Natural Beauty", "Adventure"]}
          buttons={[
            { text: "Explore Attractions", href: "attractions" },
            { text: "Learn More", href: "about" }
          ]}
          showcaseImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765883137345-wm88whkc.jpg"
          showcaseImageAlt="Zaporizhzhya skyline with Dnieper River"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765883143471-yk1qt9bk.jpg"
          imageAlt="Beautiful Dnieper River landscape"
          showDimOverlay={true}
        />
      </div>
      
      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "Zaporizhzhya is a city of" },
            { type: "image", src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765883139953-j31hsruv.jpg", alt: "Island of Khortytsia" },
            { type: "text", content: "legendary history, natural splendor, and cultural treasures" }
          ]}
          buttons={[
            { text: "Discover History", href: "history" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="attractions" data-section="attractions">
        <ProductCardSeven
          title="Top Attractions"
          description="Explore the most remarkable places to visit in Zaporizhzhya and create unforgettable memories"
          tag="Must-See Places"
          products={[
            {
              id: "khortytsia",
              name: "Island of Khortytsia",
              price: "Free Entry",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765883139953-j31hsruv.jpg",
              imageAlt: "Island of Khortytsia"
            },
            {
              id: "horticultural-park",
              name: "Horticultural Park",
              price: "Free Entry",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765883138696-s2wiyhk3.jpg",
              imageAlt: "Beautiful horticultural park"
            },
            {
              id: "cathedral",
              name: "Preobrazhensky Cathedral",
              price: "Free Entry",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765883141121-icyxb6v7.jpg",
              imageAlt: "Historic cathedral architecture"
            },
            {
              id: "museum",
              name: "Regional Museum",
              price: "Entry Fee",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765883142229-pilxw8bi.jpg",
              imageAlt: "Museum exhibits and artifacts"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="history" data-section="history">
        <FeatureCardSix
          title="A Journey Through Time"
          description="Zaporizhzhya's rich history spans centuries, from ancient settlements to a modern thriving city"
          tag="Historical Timeline"
          features={[
            {
              id: 1,
              title: "Ancient Origins",
              description: "The region was home to Scythian cultures and later became a significant trading hub on the Dnieper River",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765883144700-tuq39s4j.jpg"
            },
            {
              id: 2,
              title: "Cossack Era",
              description: "Khortytsia Island was the center of the legendary Zaporozhian Cossack kingdom, shaping Ukrainian cultural identity",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765883139953-j31hsruv.jpg"
            },
            {
              id: 3,
              title: "Industrial Growth",
              description: "The 19th and 20th centuries transformed Zaporizhzhya into an industrial powerhouse and modern city",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765883145936-ru325jw6.jpg"
            },
            {
              id: 4,
              title: "Modern Era",
              description: "Today, Zaporizhzhya stands as a vibrant cultural and educational center with contemporary attractions",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765883147091-wcxjenni.jpg"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="culture" data-section="culture">
        <MetricCardEight
          title="Zaporizhzhya in Numbers - A City of Scale and Significance"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765883148399-mywcsvd8.jpg"
          imageAlt="City botanical gardens"
          metrics={[
            { id: "1", value: "750K+", title: "Residents" },
            { id: "2", value: "1000+", title: "Years of History" },
            { id: "3", value: "50+", title: "Museums & Galleries" },
            { id: "4", value: "365", title: "Days to Explore" }
          ]}
          metricVariant="border"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Visitor Experiences"
          description="Hear from travelers who have discovered the magic of Zaporizhzhya"
          tag="Guest Reviews"
          testimonials={[
            {
              id: "1",
              name: "Maria Ivanova",
              role: "Tourist",
              company: "Moscow, Russia",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765883149392-2uba0n7c.jpg",
              imageAlt: "Maria Ivanova smiling"
            },
            {
              id: "2",
              name: "Thomas Mueller",
              role: "Explorer",
              company: "Berlin, Germany",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765883150518-0fb84eyv.jpg",
              imageAlt: "Thomas Mueller portrait"
            },
            {
              id: "3",
              name: "Sofia Kowalski",
              role: "Heritage Enthusiast",
              company: "Warsaw, Poland",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765883151689-2htwpoht.jpg",
              imageAlt: "Sofia Kowalski smiling"
            },
            {
              id: "4",
              name: "Anna Petrov",
              role: "Cultural Explorer",
              company: "Kyiv, Ukraine",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765883152761-s1pzwmwo.jpg",
              imageAlt: "Anna Petrov portrait"
            },
            {
              id: "5",
              name: "David Foster",
              role: "Adventure Seeker",
              company: "London, UK",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765883153826-1rqgc0c8.jpg",
              imageAlt: "David Foster smiling"
            },
            {
              id: "6",
              name: "Elena Rossi",
              role: "Photography Enthusiast",
              company: "Rome, Italy",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765883155359-hr262oo1.jpg",
              imageAlt: "Elena Rossi portrait"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Visitor Information"
          description="Everything you need to know to plan your visit to Zaporizhzhya"
          tag="Travel Guide"
          faqs={[
            {
              id: "1",
              title: "When is the best time to visit Zaporizhzhya?",
              content: "The best time to visit is late spring (May-June) or early fall (September-October) when the weather is mild and pleasant. Summer can be warm, while winter offers a different charm with occasional snow."
            },
            {
              id: "2",
              title: "How do I get to Zaporizhzhya?",
              content: "Zaporizhzhya is well-connected by air, rail, and road. The city has an international airport and is accessible via trains from major Ukrainian cities like Kyiv, Kharkiv, and Donetsk."
            },
            {
              id: "3",
              title: "What is the most famous attraction in Zaporizhzhya?",
              content: "The Island of Khortytsia is the most legendary attraction - a UNESCO-nominated site with rich historical and cultural significance related to the Zaporozhian Cossacks."
            },
            {
              id: "4",
              title: "How long should I stay in Zaporizhzhya?",
              content: "A 2-3 day visit allows you to explore the main attractions comfortably. However, 4-5 days would give you time for deeper cultural immersion and outdoor activities."
            },
            {
              id: "5",
              title: "Is Zaporizhzhya safe for tourists?",
              content: "Yes, Zaporizhzhya is generally a safe city for tourists. The main tourist areas are well-maintained. As always, use common sense and be aware of your surroundings."
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1765883156516-f7rvpyyz.jpg"
          imageAlt="Visitor information and travel guide"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          mediaPosition="left"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          title="Plan Your Visit to Zaporizhzhya"
          description="Subscribe to our newsletter for travel tips, event updates, and exclusive information about what to see and do in this beautiful Ukrainian city."
          useInvertedBackground="noInvert"
          inputPlaceholder="Your email address"
          buttonText="Subscribe"
          termsText="We respect your privacy and will only send you helpful travel information about Zaporizhzhya."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Zaporizhzhya"
          columns={[
            {
              title: "Explore",
              items: [
                { label: "Attractions", href: "attractions" },
                { label: "History", href: "history" },
                { label: "Culture", href: "culture" }
              ]
            },
            {
              title: "Information",
              items: [
                { label: "Travel Guide", href: "faq" },
                { label: "Contact", href: "contact" },
                { label: "Subscribe", href: "contact" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Terms of Service", href: "terms" },
                { label: "Privacy Policy", href: "privacy" }
              ]
            }
          ]}
          copyrightText="© Zaporizhzhya City Guide, 2025. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}