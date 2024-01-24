import { LabelValue } from "@/components/common/label-value";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LabelValue label="Total deposit" value={20000000} />
    </main>
  );
}
