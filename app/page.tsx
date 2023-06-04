import Home from "@/components/ui/home";
import SectionLabel from "@/components/ui/section-label";

export default function Page() {
  return (
    <main title="App" className="max-h-screen">
      <SectionLabel title="Categories" />
      <div className="px-3">
        <Home />
      </div>
    </main>
  );
}
