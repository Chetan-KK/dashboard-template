import { Loader2 } from "lucide-react";
import Header from "./Components/Header";

const Loading = () => {
  return (
    <main className="min-h-screen">
      <Header loggedIn={false} />
      <div className="flex justify-center items-center">
        <Loader2 className="h-10 w-10 mt-10 animate-spin" />
      </div>
    </main>
  );
};

export default Loading;
