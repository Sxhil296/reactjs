import { useCallback, useEffect } from "react";
import { useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) {
      str += "0123456789";
    }
    if (characters) {
      str += "!@#$%^&*()-_=+[]{};:'";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numbers, characters, setPassword]);

  useEffect(() => {
    passwordGen()
  }, [length, numbers, characters, passwordGen])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
          />
          <button className="bg-blue-700 text-white px-4 outline-none py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-4 justify-between">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              id="length"
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />

            <label htmlFor="length" className="cursor-pointer">
              Length: {length}
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="number"
              defaultChecked={numbers}
              className="cursor-pointer"
              onChange={() => {
                setNumbers((prev) => !prev);
              }}
            />
            <label htmlFor="number" className="cursor-pointer">
              Numbers
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="character"
              defaultChecked={characters}
              className="cursor-pointer"
              onChange={() => {
                setCharacters((prev) => !prev);
              }}
            />
            <label htmlFor="character" className="cursor-pointer">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordGenerator;
