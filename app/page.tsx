import Ai from "@/components/ui/ai";
import CategoriesIcons from "@/components/ui/categories-icons";
import Container from "@/components/ui/container";
import NftScroller from "@/components/ui/nft-scroller";
import SectionLabel from "@/components/ui/section-label";

export default function Page() {
  return (
    <main title="App" className="">
      <Container>
        <div className="">
          <CategoriesIcons />
          <SectionLabel title="Purchased" />
          <NftScroller />
          <SectionLabel title="News" />
        </div>
      </Container>
    </main>
  );
}
