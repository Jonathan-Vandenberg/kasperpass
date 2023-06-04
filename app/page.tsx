import Ai from "@/components/ui/ai";
import CategoriesIcons from "@/components/ui/categories-icons";
import Container from "@/components/ui/container";
import SectionLabel from "@/components/ui/section-label";

export default function Page() {
  return (
    <main title="App" className="max-h-screen">
      <Container>
        <>
          <SectionLabel title="Categories" />
          <CategoriesIcons />
          <SectionLabel title="Notifications" />
          <Ai />
        </>
      </Container>
    </main>
  );
}
