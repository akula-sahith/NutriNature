import Hero from "../components/Hero";
import ProductsPreview from "../components/ProductReview";
import ManufacturingStory from "../components/ManufacturingComponent";
import CommitmentSection from "../components/CommitmentSection";
export default function Home(){
 return <>
   <Hero/>
   <ProductsPreview/>
   {/* <ManufacturingCommitment/> */}
   <ManufacturingStory/>
   <CommitmentSection/>
 </>
};