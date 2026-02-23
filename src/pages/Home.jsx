import Hero from "../components/Hero";
import ProductsPreview from "../components/ProductReview";
import ManufacturingStory from "../components/ManufacturingComponent";
import CommitmentSection from "../components/CommitmentSection";
import Testimonials from "../components/Testimonials";
import Certifications from "../components/Certifications";
export default function Home(){
 return <>
   <Hero/>
   <ProductsPreview/>
   {/* <ManufacturingCommitment/> */}
   <ManufacturingStory/>
   <CommitmentSection/>
   <Testimonials/>
   <Certifications/>
 </>
};