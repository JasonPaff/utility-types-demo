import { Button } from "./Button";
import { useState } from "react";
import "./App.css";

function App() {
  const [isSaving, setIsSaving] = useState(false);

  const onSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 2000);
  };

  return (
    <div className="flex min-h-screen w-full justify-center items-center bg-slate-800">
      <Button
        busyLabel={"Saving..."}
        disabled={isSaving}
        isBusy={isSaving}
        label={"Save Stuff"}
        onClick={onSave}
      />
    </div>
  );
}

export default App;
