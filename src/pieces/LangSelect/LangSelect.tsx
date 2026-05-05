import { getFlags, getLangByCountryName } from "@/constants/flags";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";

const languages = [
  {
    id: 1,
    name: "Português",
    lang: getLangByCountryName("Brasil"),
  },
  {
    id: 2,
    name: "English",
    lang: getLangByCountryName("Estados Unidos"),
  },
  {
    id: 3,
    name: "Deutsch",
    lang: getLangByCountryName("Alemanha"),
  },
  {
    id: 4,
    name: "Français",
    lang: getLangByCountryName("França"),
  },
  {
    id: 5,
    name: "Español",
    lang: getLangByCountryName("Espanha"),
  },
];

const LangSelect = () => {
  const [selectedPerson, setSelectedPerson] = useState(languages[0]);

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <ListboxButton className="flex h-11 min-w-[4.5rem] cursor-pointer items-center justify-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition outline-none hover:bg-white/12 data-[active]:bg-white/10 data-[hover]:bg-white/12">
        <span>{selectedPerson.name}</span>
      </ListboxButton>
      <ListboxOptions
        anchor="bottom end"
        className="z-50 mt-1 flex min-w-[8rem] flex-col rounded-xl border border-white/10 bg-zinc-900/95 shadow-xl backdrop-blur-xl outline-none [--anchor-gap:4px]"
      >
        {languages
          .filter((person) => person.id !== selectedPerson.id)
          .map((person) => (
            <ListboxOption
              key={person.id}
              value={person}
              className="flex w-full cursor-pointer items-center justify-center gap-2 px-3 py-2 text-sm text-white data-[focus]:bg-white/10"
            >
              <span className="font-semibold">{person.name}</span>
              {/* <span className="ml-auto text-xs text-white/50">
                {person.lang}
              </span> */}
            </ListboxOption>
          ))}
      </ListboxOptions>
    </Listbox>
  );
};

export default LangSelect;
