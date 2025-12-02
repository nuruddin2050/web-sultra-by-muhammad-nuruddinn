import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import svgPaths from "./imports/svg-a0ogha0deo";
import imgImage1 from "figma:asset/fbd049270d5ee606ec77d5abb8e0fc3557f9e119.png";
import imgImageWithFallback from "figma:asset/68d7bfd8bf5edfa35afbcf08fdf843fd2ccde43a.png";
import imgImageWithFallback1 from "figma:asset/edc21152be3d4258d2359ef94e7e95f11e50a28f.png";
import imgImageWithFallback2 from "figma:asset/2f839da68dbba635e0a171199c38f924e636b1e6.png";
import imgImageWithFallback3 from "figma:asset/2e9ed8df21fd68c4f3941142179080a64cefe647.png";
import imgImageWithFallback4 from "figma:asset/919d7498f5e094b27c2828bcb97ade78a078ecaf.png";
import imgBagian02 from "figma:asset/797408c0ac7549290df4e81dba4e6aeaa1359d33.png";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

function Container() {
  return (
    <div className="bg-[#f0b100] relative rounded-[2.23696e+07px] shrink-0 size-[48px] transition-transform duration-300 hover:scale-110" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <div className="flex h-[48.885px] items-center justify-center relative shrink-0 w-[50.311px]" style={{ "--transform-inner-width": "49.859375", "--transform-inner-height": "48.421875" } as React.CSSProperties}>
          <div className="flex-none rotate-[179.48deg] scale-y-[-100%]">
            <div className="h-[48.434px] relative w-[49.873px]" data-name="image 1">
              <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48.434px] w-[49.873px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-nowrap text-white top-[-1.33px] whitespace-pre">PROVINSI</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-0 text-[18px] text-nowrap text-white top-[-1px] whitespace-pre">SULAWESI TENGGARA</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[48px] items-start relative w-full">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[48px] relative shrink-0 w-[237.198px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[48px] items-center relative w-[237.198px]">
        <Container />
        <Container3 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.83%_16.67%_79.17%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-1px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 2">
            <path d="M1 1H17" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[16.67%] right-[16.67%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-1px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 2">
            <path d="M1 1H17" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[79.17%_16.67%_20.83%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-1px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 2">
            <path d="M1 1H17" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <motion.div 
      className="relative shrink-0 size-[40px] cursor-pointer" 
      data-name="Button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[40px]">
        <Icon />
      </div>
    </motion.div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div 
      className={`fixed bg-[#1e3a5f] box-border content-stretch flex h-[80px] items-center justify-between left-0 px-[80px] py-0 top-0 w-full z-50 transition-shadow duration-300 ${scrolled ? 'shadow-lg' : ''}`}
      data-name="Header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container4 />
      <Button />
    </motion.div>
  );
}

function Heading1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[36px] left-[367.89px] text-[30px] text-center text-neutral-950 text-nowrap top-[-3px] translate-x-[-50%] whitespace-pre">E-Layanan Terpadu</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p272d7400} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p408a000} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M16.6667 15H13.3333" id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M26.6667 21.6667H13.3333" id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M26.6667 28.3333H13.3333" id="Vector_5" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute bg-[#fef9c2] content-stretch flex items-center justify-center left-[128px] rounded-[2.23696e+07px] size-[96px] top-0 transition-all duration-300" data-name="001">
      <Icon1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[24px] left-0 top-[112px] w-[352px]" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[176.48px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">E-Perizinan</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[20px] left-0 top-[144px] w-[352px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[175.53px] text-[#4a5565] text-[14px] text-center text-nowrap top-[-1.33px] translate-x-[-50%] whitespace-pre">Pengurusan perizinan berbagai keperluan pemerintahan.</p>
    </div>
  );
}

function Perizinan() {
  return (
    <motion.div 
      className="[grid-area:1_/_1] place-self-stretch relative shrink-0 cursor-pointer" 
      data-name="perizinan"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <Component1 />
      <Heading2 />
      <Paragraph />
    </motion.div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p1f310980} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M3.33333 16.6667H36.6667" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-blue-100 content-stretch flex items-center justify-center left-[128px] rounded-[2.23696e+07px] size-[96px] top-0 transition-all duration-300" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[24px] left-0 top-[112px] w-[352px]" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[176.9px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">Pajak Online</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[20px] left-0 top-[144px] w-[352px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[176.14px] text-[#4a5565] text-[14px] text-center text-nowrap top-[-1.33px] translate-x-[-50%] whitespace-pre">Pembayaran dan pengecekan status Pajak online.</p>
    </div>
  );
}

function Pajak() {
  return (
    <motion.div 
      className="[grid-area:1_/_2] place-self-stretch relative shrink-0 cursor-pointer" 
      data-name="pajak"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <Container5 />
      <Heading4 />
      <Paragraph1 />
    </motion.div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p1f71f370} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[#fef9c2] content-stretch flex items-center justify-center left-[128px] rounded-[2.23696e+07px] size-[96px] top-0 transition-all duration-300" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[24px] left-0 top-[112px] w-[352px]" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[176.2px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">Layanan Kesehatan</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[20px] left-0 top-[144px] w-[352px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[176.49px] text-[#4a5565] text-[14px] text-center text-nowrap top-[-1.33px] translate-x-[-50%] whitespace-pre">Layanan terpadu informasi dan registrasi kesehatan.</p>
    </div>
  );
}

function Kesehatan() {
  return (
    <motion.div 
      className="[grid-area:2_/_1] place-self-stretch relative shrink-0 cursor-pointer" 
      data-name="kesehatan"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <Container6 />
      <Heading5 />
      <Paragraph2 />
    </motion.div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p1c977300} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d="M36.6667 16.6667V26.6667" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p25a5c600} id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-gray-100 content-stretch flex items-center justify-center left-[128px] rounded-[2.23696e+07px] size-[96px] top-0 transition-all duration-300" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[24px] left-0 top-[112px] w-[352px]" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[176.58px] text-[16px] text-center text-neutral-950 text-nowrap top-[-1.67px] translate-x-[-50%] whitespace-pre">E-Edukasi</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[20px] left-0 top-[144px] w-[352px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[176.58px] text-[#4a5565] text-[14px] text-center text-nowrap top-[-1.33px] translate-x-[-50%] whitespace-pre">Edukasi online dan informasi lembaga pendidikan.</p>
    </div>
  );
}

function Edukasi() {
  return (
    <motion.div 
      className="[grid-area:2_/_2] place-self-stretch relative shrink-0 cursor-pointer" 
      data-name="edukasi"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <Container7 />
      <Heading6 />
      <Paragraph3 />
    </motion.div>
  );
}

function ELayanan() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[360px] relative shrink-0 w-full" data-name="e layanan">
      <Perizinan />
      <Pajak />
      <Kesehatan />
      <Edukasi />
    </div>
  );
}

function EServices() {
  return (
    <motion.div 
      className="absolute bg-white box-border content-stretch flex flex-col gap-[48px] h-[572px] items-start left-0 pb-0 pt-[64px] px-[80px] top-[580px] w-full" 
      data-name="EServices"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      transition={{ duration: 0.5 }}
    >
      <Heading1 />
      <ELayanan />
    </motion.div>
  );
}

function Heading7() {
  return (
    <div className="h-[32px] relative shrink-0 w-[141.885px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-start relative w-[141.885px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[24px] text-neutral-950 text-nowrap whitespace-pre">Berita Terkini</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <motion.div 
      className="bg-gray-200 relative rounded-[2.23696e+07px] shrink-0 size-[32px] cursor-pointer" 
      data-name="Button"
      whileHover={{ scale: 1.1, backgroundColor: "#e5e7eb" }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon5 />
      </div>
    </motion.div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <motion.div 
      className="basis-0 bg-[#f0b100] grow h-[32px] min-h-px min-w-px relative rounded-[2.23696e+07px] shrink-0 cursor-pointer" 
      data-name="Button"
      whileHover={{ scale: 1.1, backgroundColor: "#fbbf24" }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-center justify-center relative w-full">
        <Icon6 />
      </div>
    </motion.div>
  );
}

function Container8() {
  return (
    <div className="h-[32px] relative shrink-0 w-[72px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-start relative w-[72px]">
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Container8 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute h-[40px] left-[16px] top-[208px] w-[324px]" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 top-[-1.33px] w-[305px]">Local Government Maulidade Raadsot Pelor Izin Atoellata Sulawesi Tenggara</p>
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[192px] left-0 top-0 w-[356px] overflow-hidden" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full transition-transform duration-500 hover:scale-110" src={imgImageWithFallback} />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute bg-[#f0b100] box-border content-stretch flex h-[26.667px] items-start left-[16px] px-[16px] py-[4px] rounded-[2.23696e+07px] top-[151.33px] w-[111.135px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Berita Terkini</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[192px] left-0 top-0 w-[356px]" data-name="Container">
      <ImageWithFallback />
      <Text />
    </div>
  );
}

function Container11() {
  return (
    <motion.div 
      className="[grid-area:1_/_1] bg-white overflow-clip place-self-stretch relative rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 cursor-pointer" 
      data-name="Container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scaleIn}
      transition={{ duration: 0.4 }}
      whileHover={{ 
        y: -8,
        boxShadow: "0px 10px 20px -5px rgba(0,0,0,0.2), 0px 4px 8px -4px rgba(0,0,0,0.2)",
        transition: { duration: 0.3 }
      }}
    >
      <Heading8 />
      <Container10 />
    </motion.div>
  );
}

function Heading9() {
  return (
    <div className="absolute h-[40px] left-[16px] top-[208px] w-[324px]" data-name="Heading 3">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[14px] text-neutral-950 top-[-1.33px] w-[318px]">Festival Budaya Sulawesi Tenggara Sukses Ditutup Lomba Budaya</p>
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute h-[192px] left-0 top-0 w-[356px] overflow-hidden" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full transition-transform duration-500 hover:scale-110" src={imgImageWithFallback1} />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute bg-[#f0b100] box-border content-stretch flex h-[26.667px] items-start left-[16px] px-[16px] py-[4px] rounded-[2.23696e+07px] top-[151.33px] w-[77.219px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Budaya</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[192px] left-0 top-0 w-[356px]" data-name="Container">
      <ImageWithFallback1 />
      <Text1 />
    </div>
  );
}

function Container13() {
  return (
    <motion.div 
      className="[grid-area:1_/_2] bg-white overflow-clip place-self-stretch relative rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 cursor-pointer" 
      data-name="Container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scaleIn}
      transition={{ duration: 0.4, delay: 0.1 }}
      whileHover={{ 
        y: -8,
        boxShadow: "0px 10px 20px -5px rgba(0,0,0,0.2), 0px 4px 8px -4px rgba(0,0,0,0.2)",
        transition: { duration: 0.3 }
      }}
    >
      <Heading9 />
      <Container12 />
    </motion.div>
  );
}

function Container14() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[264px] relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container13 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[32px] relative shrink-0 w-[220.094px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-start relative w-[220.094px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[24px] text-neutral-950 text-nowrap whitespace-pre">{`Pariwisata & Budaya`}</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <motion.div 
      className="bg-gray-200 relative rounded-[2.23696e+07px] shrink-0 size-[32px] cursor-pointer" 
      data-name="Button"
      whileHover={{ scale: 1.1, backgroundColor: "#e5e7eb" }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon7 />
      </div>
    </motion.div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <motion.div 
      className="basis-0 bg-[#f0b100] grow h-[32px] min-h-px min-w-px relative rounded-[2.23696e+07px] shrink-0 cursor-pointer" 
      data-name="Button"
      whileHover={{ scale: 1.1, backgroundColor: "#fbbf24" }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-center justify-center relative w-full">
        <Icon8 />
      </div>
    </motion.div>
  );
}

function Container15() {
  return (
    <div className="h-[32px] relative shrink-0 w-[72px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-start relative w-[72px]">
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading10 />
      <Container15 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="absolute h-[192px] left-0 top-0 w-[356px] overflow-hidden" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full transition-transform duration-500 hover:scale-110" src={imgImageWithFallback2} />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute bg-[#f0b100] box-border content-stretch flex h-[26.667px] items-start left-[16px] px-[16px] py-[4px] rounded-[2.23696e+07px] top-[151.33px] w-[115.688px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Wisata Bahari</p>
    </div>
  );
}

function Container17() {
  return (
    <motion.div 
      className="[grid-area:1_/_1] bg-white overflow-clip place-self-stretch relative rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 cursor-pointer" 
      data-name="Container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scaleIn}
      transition={{ duration: 0.4, delay: 0.1 }}
      whileHover={{ 
        y: -8,
        boxShadow: "0px 10px 20px -5px rgba(0,0,0,0.2), 0px 4px 8px -4px rgba(0,0,0,0.2)",
        transition: { duration: 0.3 }
      }}
    >
      <ImageWithFallback2 />
      <Text2 />
    </motion.div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="absolute h-[192px] left-0 top-0 w-[356px] overflow-hidden" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full transition-transform duration-500 hover:scale-110" src={imgImageWithFallback3} />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-[#f0b100] box-border content-stretch flex h-[26.667px] items-start left-[16px] px-[16px] py-[4px] rounded-[2.23696e+07px] top-[151.33px] w-[122.448px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Wisata Budaya</p>
    </div>
  );
}

function Container18() {
  return (
    <motion.div 
      className="[grid-area:1_/_2] bg-white overflow-clip place-self-stretch relative rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 cursor-pointer" 
      data-name="Container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scaleIn}
      transition={{ duration: 0.4, delay: 0.2 }}
      whileHover={{ 
        y: -8,
        boxShadow: "0px 10px 20px -5px rgba(0,0,0,0.2), 0px 4px 8px -4px rgba(0,0,0,0.2)",
        transition: { duration: 0.3 }
      }}
    >
      <ImageWithFallback3 />
      <Text3 />
    </motion.div>
  );
}

function Container19() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[192px] relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[248px] items-start relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container19 />
    </div>
  );
}

function Berita() {
  return (
    <motion.div 
      className="[grid-area:1_/_1] content-stretch flex flex-col gap-[24px] items-start place-self-stretch relative shrink-0" 
      data-name="berita"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      transition={{ duration: 0.5 }}
    >
      <Container9 />
      <Container14 />
      <Container20 />
    </motion.div>
  );
}

function Heading11() {
  return (
    <div className="h-[28px] relative shrink-0 w-[101.74px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[101.74px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-0 text-[18px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Berita Terkini</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <motion.div 
      className="bg-[#f0b100] relative rounded-[2.23696e+07px] shrink-0 size-[32px] cursor-pointer" 
      data-name="Button"
      whileHover={{ scale: 1.1, backgroundColor: "#fbbf24" }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon9 />
      </div>
    </motion.div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading11 />
      <Button5 />
    </div>
  );
}

function ListItem() {
  return (
    <motion.div 
      className="h-[20px] relative shrink-0 w-full cursor-pointer" 
      data-name="List Item"
      whileHover={{ x: 5, transition: { duration: 0.2 } }}
    >
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#364153] text-[14px] text-nowrap top-[-1.33px] whitespace-pre">Lelel Najleoran Provinsi Sulawesi Tenggara</p>
    </motion.div>
  );
}

function ListItem1() {
  return (
    <motion.div 
      className="h-[20px] relative shrink-0 w-full cursor-pointer" 
      data-name="List Item"
      whileHover={{ x: 5, transition: { duration: 0.2 } }}
    >
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#364153] text-[14px] text-nowrap top-[-1.33px] whitespace-pre">Gita Lunas Provinsi Sulawesi Tenggara</p>
    </motion.div>
  );
}

function ListItem2() {
  return (
    <motion.div 
      className="h-[20px] relative shrink-0 w-full cursor-pointer" 
      data-name="List Item"
      whileHover={{ x: 5, transition: { duration: 0.2 } }}
    >
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#364153] text-[14px] text-nowrap top-[-1.33px] whitespace-pre">Mengumpakeas Dejam Provinsi Sulawesi Tenggara</p>
    </motion.div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[84px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function BeritaTerkinieh() {
  return (
    <motion.div 
      className="[grid-area:2_/_1] bg-white place-self-stretch relative rounded-[10px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0" 
      data-name="berita terkinieh"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      transition={{ duration: 0.5 }}
    >
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-[24px] relative size-full">
          <Container21 />
          <List />
        </div>
      </div>
    </motion.div>
  );
}

function BagianBerita() {
  return (
    <div className="absolute bg-gray-50 gap-[32px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[616px_minmax(0px,_1fr)] h-[828px] left-[80px] top-[1216px] w-[736px]" data-name="bagian berita">
      <Berita />
      <BeritaTerkinieh />
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[36px] left-[368.36px] text-[30px] text-center text-neutral-950 text-nowrap top-[-3px] translate-x-[-50%] whitespace-pre">Pesan Gubernur</p>
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="basis-0 grow h-[202.667px] min-h-px min-w-px relative shrink-0" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageWithFallback4} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[202.667px] w-full" />
    </div>
  );
}

function Container22() {
  return (
    <div className="[grid-area:1_/_1] place-self-stretch relative shrink-0" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex items-end pb-[32px] pt-0 px-[32px] relative size-full">
          <ImageWithFallback4 />
        </div>
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-[32px] top-[32px] w-[304px]" data-name="Heading 3">
      <p className="basis-0 font-['Arimo:Regular',sans-serif] font-normal grow leading-[32px] min-h-px min-w-px relative shrink-0 text-[24px] text-neutral-950">Ali Mazi</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[20px] left-[32px] top-[72px] w-[304px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] text-nowrap top-[-1.33px] whitespace-pre">Gubernur Provinsi Sulawesi Tenggara</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[120px] left-[32px] top-[116px] w-[304px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#364153] text-[14px] top-[-1.33px] w-[289px]">Sulawesi Tenggara, Provinsi Sulawesi Tenggara merupakan duri dari mewadahkannya/mengeksekusikannganpakon hasuii daljam berbagai inidianya mempercayai swalu konsul atau secara di sektor dapat meningutakan.</p>
    </div>
  );
}

function Button6() {
  return (
    <motion.div 
      className="absolute bg-[#f0b100] h-[40px] left-[32px] rounded-[2.23696e+07px] top-[260px] w-[183.25px] cursor-pointer overflow-hidden" 
      data-name="Button"
      whileHover={{ 
        scale: 1.05,
        backgroundColor: "#fbbf24",
        boxShadow: "0px 4px 12px rgba(240, 177, 0, 0.4)"
      }}
      whileTap={{ scale: 0.98 }}
    >
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[92.5px] text-[16px] text-center text-nowrap text-white top-[6.33px] translate-x-[-50%] whitespace-pre">Baca Selengkapnya</p>
    </motion.div>
  );
}

function Container23() {
  return (
    <div className="[grid-area:1_/_2] place-self-stretch relative shrink-0" data-name="Container">
      <Heading13 />
      <Paragraph4 />
      <Paragraph5 />
      <Button6 />
    </div>
  );
}

function Almaz() {
  return (
    <motion.div 
      className="bg-gray-100 box-border grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[332px] overflow-clip relative rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" 
      data-name="almaz"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scaleIn}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        boxShadow: "0px 15px 25px -5px rgba(0,0,0,0.15), 0px 6px 10px -6px rgba(0,0,0,0.15)",
        transition: { duration: 0.3 }
      }}
    >
      <Container22 />
      <Container23 />
    </motion.div>
  );
}

function BagianGubernur() {
  return (
    <motion.div 
      className="absolute bg-white box-border content-stretch flex flex-col gap-[48px] h-[544px] items-start left-0 pb-0 pt-[64px] px-[80px] top-[2108px] w-full" 
      data-name="bagian gubernur"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      transition={{ duration: 0.5 }}
    >
      <Heading12 />
      <Almaz />
    </motion.div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-1.67px] whitespace-pre">Kontak Kami</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#d1d5dc] text-[14px] text-nowrap top-[-1.33px] whitespace-pre">Jl. Mayjen Sutoyo No. 1</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#d1d5dc] text-[14px] text-nowrap top-[-1.33px] whitespace-pre">Kendari, Sulawesi Tenggara</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#d1d5dc] text-[14px] text-nowrap top-[-1.33px] whitespace-pre">Email: info@sulteng.go.id</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#d1d5dc] text-[14px] text-nowrap top-[-1.33px] whitespace-pre">Telepon: (0401) 123456</p>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[104px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
      <ListItem6 />
    </div>
  );
}

function Container24() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading3 />
      <List1 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-1.67px] whitespace-pre">Peta Situs</p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex h-[18.667px] items-start left-0 top-[0.67px] w-[50.635px]" data-name="Link">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#d1d5dc] text-[14px] text-nowrap whitespace-pre">Beranda</p>
    </div>
  );
}

function ListItem7() {
  return (
    <motion.div 
      className="h-[20px] relative shrink-0 w-full cursor-pointer" 
      data-name="List Item"
      whileHover={{ x: 5, transition: { duration: 0.2 } }}
    >
      <Link />
    </motion.div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex h-[18.667px] items-start left-0 top-[0.67px] w-[85.042px]" data-name="Link">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#d1d5dc] text-[14px] text-nowrap whitespace-pre">Pemerintahan</p>
    </div>
  );
}

function ListItem8() {
  return (
    <motion.div 
      className="h-[20px] relative shrink-0 w-full cursor-pointer" 
      data-name="List Item"
      whileHover={{ x: 5, transition: { duration: 0.2 } }}
    >
      <Link1 />
    </motion.div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex h-[18.667px] items-start left-0 top-[0.67px] w-[35.479px]" data-name="Link">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#d1d5dc] text-[14px] text-nowrap whitespace-pre">Berita</p>
    </div>
  );
}

function ListItem9() {
  return (
    <motion.div 
      className="h-[20px] relative shrink-0 w-full cursor-pointer" 
      data-name="List Item"
      whileHover={{ x: 5, transition: { duration: 0.2 } }}
    >
      <Link2 />
    </motion.div>
  );
}

function Link3() {
  return (
    <div className="absolute content-stretch flex h-[18.667px] items-start left-0 top-[0.67px] w-[61.188px]" data-name="Link">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#d1d5dc] text-[14px] text-nowrap whitespace-pre">Pariwisata</p>
    </div>
  );
}

function ListItem10() {
  return (
    <motion.div 
      className="h-[20px] relative shrink-0 w-full cursor-pointer" 
      data-name="List Item"
      whileHover={{ x: 5, transition: { duration: 0.2 } }}
    >
      <Link3 />
    </motion.div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[104px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem7 />
      <ListItem8 />
      <ListItem9 />
      <ListItem10 />
    </div>
  );
}

function Container25() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading14 />
      <List2 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-nowrap text-white top-[-1.67px] whitespace-pre">Kebijakan Privasi</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute content-stretch flex h-[18.667px] items-start left-0 top-[0.67px] w-[102.5px]" data-name="Link">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#d1d5dc] text-[14px] text-nowrap whitespace-pre">Kebijakan Privasi</p>
    </div>
  );
}

function ListItem11() {
  return (
    <motion.div 
      className="h-[20px] relative shrink-0 w-full cursor-pointer" 
      data-name="List Item"
      whileHover={{ x: 5, transition: { duration: 0.2 } }}
    >
      <Link4 />
    </motion.div>
  );
}

function Link5() {
  return (
    <div className="absolute content-stretch flex h-[18.667px] items-start left-0 top-[0.67px] w-[131.583px]" data-name="Link">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#d1d5dc] text-[14px] text-nowrap whitespace-pre">Syarat dan Ketentuan</p>
    </div>
  );
}

function ListItem12() {
  return (
    <motion.div 
      className="h-[20px] relative shrink-0 w-full cursor-pointer" 
      data-name="List Item"
      whileHover={{ x: 5, transition: { duration: 0.2 } }}
    >
      <Link5 />
    </motion.div>
  );
}

function Link6() {
  return (
    <div className="absolute content-stretch flex h-[18.667px] items-start left-0 top-[0.67px] w-[25.604px]" data-name="Link">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#d1d5dc] text-[14px] text-nowrap whitespace-pre">FAQ</p>
    </div>
  );
}

function ListItem13() {
  return (
    <motion.div 
      className="h-[20px] relative shrink-0 w-full cursor-pointer" 
      data-name="List Item"
      whileHover={{ x: 5, transition: { duration: 0.2 } }}
    >
      <Link6 />
    </motion.div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[76px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem11 />
      <ListItem12 />
      <ListItem13 />
    </div>
  );
}

function Container26() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading15 />
      <List3 />
    </div>
  );
}

function KontakUs() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[144px] relative shrink-0 w-full" data-name="kontak us">
      <Container24 />
      <Container25 />
      <Container26 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p30c8d680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link7() {
  return (
    <motion.div 
      className="bg-[#364153] relative rounded-[2.23696e+07px] shrink-0 size-[40px] cursor-pointer" 
      data-name="Link"
      whileHover={{ scale: 1.2, backgroundColor: "#4b5563" }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon10 />
      </div>
    </motion.div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p188b5880} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link8() {
  return (
    <motion.div 
      className="bg-[#364153] relative rounded-[2.23696e+07px] shrink-0 size-[40px] cursor-pointer" 
      data-name="Link"
      whileHover={{ scale: 1.2, backgroundColor: "#4b5563" }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon11 />
      </div>
    </motion.div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_3_255)" id="Icon">
          <path d={svgPaths.p4b98700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p19ccea80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M14.5833 5.41667H14.5917" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_3_255">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link9() {
  return (
    <motion.div 
      className="bg-[#364153] relative rounded-[2.23696e+07px] shrink-0 size-[40px] cursor-pointer" 
      data-name="Link"
      whileHover={{ scale: 1.2, backgroundColor: "#4b5563" }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon12 />
      </div>
    </motion.div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pd45be00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p212a8900} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link10() {
  return (
    <motion.div 
      className="basis-0 bg-[#364153] grow h-[40px] min-h-px min-w-px relative rounded-[2.23696e+07px] shrink-0 cursor-pointer" 
      data-name="Link"
      whileHover={{ scale: 1.2, backgroundColor: "#4b5563" }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[40px] items-center justify-center relative w-full">
        <Icon13 />
      </div>
    </motion.div>
  );
}

function Container27() {
  return (
    <div className="h-[40px] relative shrink-0 w-[208px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[40px] items-center relative w-[208px]">
        <Link7 />
        <Link8 />
        <Link9 />
        <Link10 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#f0b100] relative rounded-[2.23696e+07px] shrink-0 size-[48px] transition-transform duration-300 hover:scale-110" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <div className="flex h-[48.885px] items-center justify-center relative shrink-0 w-[50.311px]" style={{ "--transform-inner-width": "49.859375", "--transform-inner-height": "48.421875" } as React.CSSProperties}>
          <div className="flex-none rotate-[179.48deg] scale-y-[-100%]">
            <div className="h-[48.434px] relative w-[49.873px]" data-name="image 1">
              <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48.434px] w-[49.873px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#d1d5dc] text-[14px] text-nowrap top-[-1.33px] whitespace-pre">Hak Cipta © 2024 Pemerintah Provinsi Sulawesi Tenggara</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[48px] relative shrink-0 w-[417.385px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[48px] items-center relative w-[417.385px]">
        <Container28 />
        <Container29 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container30 />
    </div>
  );
}

function HakCipta() {
  return (
    <div className="box-border content-stretch flex flex-col h-[80.667px] items-start pb-0 pt-[32.667px] px-0 relative shrink-0 w-full" data-name="hak cipta">
      <div aria-hidden="true" className="absolute border-[#364153] border-[0.667px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container31 />
    </div>
  );
}

function Footer() {
  return (
    <motion.div 
      className="absolute bg-[#1e3a5f] box-border content-stretch flex flex-col gap-[32px] h-[352.667px] items-start left-0 pb-0 pt-[48px] px-[80px] top-[2652px] w-full" 
      data-name="Footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      transition={{ duration: 0.5 }}
    >
      <KontakUs />
      <HakCipta />
    </motion.div>
  );
}

function Bagian1() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="absolute h-[500px] left-0 top-0 w-full" data-name="bagian 02">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          style={{ y }}
        >
          <img alt="" className="absolute h-[144%] left-0 max-w-none top-0 w-[120.54%]" src={imgBagian02} />
        </motion.div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute font-['Inter:Bold',sans-serif] font-bold h-[96px] leading-[48px] left-0 not-italic text-[48px] text-nowrap text-white top-0 w-[620.656px] whitespace-pre" data-name="Heading 1">
      <motion.p 
        className="absolute left-0 top-[-5px]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        SELAMAT DATANG DI
      </motion.p>
      <motion.p 
        className="absolute left-0 top-[43px]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        SULAWESI TENGGARA
      </motion.p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[28px] left-0 top-[112px] w-[620.656px]" data-name="Paragraph">
      <motion.p 
        className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-0 text-[20px] text-nowrap text-white top-[-2.33px] whitespace-pre"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        Membangun Masa Depan, Melestarikan Budaya, Melayani Masyarakat.
      </motion.p>
    </div>
  );
}

function Button7() {
  return (
    <motion.div 
      className="absolute border-2 border-solid border-white h-[52px] left-0 rounded-[2.23696e+07px] top-[172px] w-[220.688px] cursor-pointer overflow-hidden" 
      data-name="Button"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9 }}
      whileHover={{ 
        scale: 1.05,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderColor: "#f0b100",
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[108px] text-[16px] text-center text-nowrap text-white top-[10.33px] translate-x-[-50%] whitespace-pre">Jelajahi Layanan Kami</p>
    </motion.div>
  );
}

function Bagian() {
  return (
    <div className="absolute h-[224px] left-[80px] top-[138px] w-[620.656px]" data-name="bagian 01">
      <Heading />
      <Paragraph6 />
      <Button7 />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute h-[500px] left-0 overflow-clip top-[80px] w-full" data-name="001">
      <Bagian1 />
      <Bagian />
    </div>
  );
}

function Header1() {
  return (
    <div className="bg-gray-50 h-[3004.67px] relative shrink-0 w-full" data-name="header">
      <Header />
      <EServices />
      <BagianBerita />
      <BagianGubernur />
      <Footer />
      <Component />
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="sultra web">
      <Header1 />
    </div>
  );
}
