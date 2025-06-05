// import { useState} from "react";
// import Select from "react-select";

// const languageOptions = [
//     { value: "sq", label: "Albanian" },
//     { value: "ar", label: "Arabic" },
//     { value: "az", label: "Azerbaijani" },
//     { value: "bn", label: "Bengali" },
//     { value: "bg", label: "Bulgarian" },
//     { value: "ca", label: "Catalan" },
//     { value: "zh", label: "Chinese" },
//     { value: "cs", label: "Czech" },
//     { value: "da", label: "Danish" },
//     { value: "nl", label: "Dutch" },
//     { value: "en", label: "English" },
//     { value: "eo", label: "Esperanto" },
//     { value: "et", label: "Estonian" },
//     { value: "fi", label: "Finnish" },
//     { value: "fr", label: "French" },
//     { value: "de", label: "German" },
//     { value: "el", label: "Greek" },
//     { value: "he", label: "Hebrew" },
//     { value: "hi", label: "Hindi" },
//     { value: "hu", label: "Hungarian" },
//     { value: "id", label: "Indonesian" },
//     { value: "ga", label: "Irish" },
//     { value: "it", label: "Italian" },
//     { value: "ja", label: "Japanese" },
//     { value: "ko", label: "Korean" },
//     { value: "lv", label: "Latvian" },
//     { value: "lt", label: "Lithuanian" },
//     { value: "ms", label: "Malay" },
//     { value: "fa", label: "Persian" },
//     { value: "pl", label: "Polish" },
//     { value: "pt", label: "Portuguese" },
//     { value: "ro", label: "Romanian" },
//     { value: "ru", label: "Russian" },
//     { value: "sk", label: "Slovak" },
//     { value: "sl", label: "Slovenian" },
//     { value: "es", label: "Spanish" },
//     { value: "sv", label: "Swedish" },
//     { value: "tl", label: "Tagalog" },
//     { value: "th", label: "Thai" },
//     { value: "tr", label: "Turkish" },
//     { value: "uk", label: "Ukrainian" },
//     { value: "ur", label: "Urdu" },
// ];

// const customStyles = {
//     control: (provided) => ({
//         ...provided,
//         backgroundColor: "black",
//         color: "white",
//     }),
//     singleValue: (provided) => ({
//         ...provided,
//         color: "white",
//     }),
//     menu: (provided) => ({
//         ...provided,
//         backgroundColor: "black",
//         color: "white",
//     }),
//     option: (provided, state) => ({
//         ...provided,
//         backgroundColor: state.isFocused ? "#333" : "black",
//         color: "white",
//         cursor: "pointer",
//     }),
//     input: (provided) => ({
//         ...provided,
//         color: "white",
//     }),
//     placeholder: (provided) => ({
//         ...provided,
//         color: "gray",
//     }),
//     dropdownIndicator: (provided) => ({
//         ...provided,
//         color: "white",
//     }),
//     indicatorSeparator: (provided) => ({
//         ...provided,
//         backgroundColor: "white",
//     }),
// };

// export default function Dictionary() {
//     const [translateFrom, setTranslateFrom] = useState("");
//     const [translateTo, setTranslateTo] = useState("")
//     const [input, setInput] = useState("");
//     const [translated, setTranslated] = useState("")

//     const changeText = (e) =>{
//         setInput(e.target.value)
//     }

//     const switchLanguage = () =>{
//         let temp = translateFrom;
//         setTranslateFrom(translateTo);
//         setTranslateTo(temp)
//     }



//     return (
//         <div className="dictionary">
//             <div className="container">
//                 <div className="languages" >
//                     <Select
//                         options={languageOptions}
//                         value={translateFrom}
//                         onChange={setTranslateFrom}
//                         placeholder="Select source language"
//                         className="mt-5 langDropDown"
//                         styles={customStyles}
//                     />

//                     <i
//                         className="fas fa-repeat fa-2x mt-5 switchLanguage"
//                         onClick={switchLanguage}
//                         style={{ cursor: "pointer", alignSelf: "center" }}
//                         title="Switch languages"
//                     ></i>

//                     <Select
//                         options={languageOptions}
//                         value={translateTo}
//                         onChange={setTranslateTo}
//                         placeholder="Select target language"
//                         className="mt-5"
//                         styles={customStyles}
//                     />
//                 </div>

//                 <hr style={{ height: "10px" }} />

//                 <div className="container texts" style={{ display: "flex", gap: "1rem" }}>
//                     <textarea
//                         className="form-control"
//                         rows="9"
//                         value={input}
//                         onChange={changeText}
//                         placeholder="Enter text here"
//                         style={{ flex: 1, padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
//                     ></textarea>
//                     <textarea
//                         className="form-control"
//                         rows="9"
//                         placeholder="Translated text will be shown here"
//                         readOnly
//                         value={translated}
//                         style={{ flex: 1, padding: "10px", backgroundColor: "#f0f0f0", borderRadius: "8px", border: "1px solid #ccc" }}
//                     ></textarea>
//                 </div>
//             </div>
//         </div>
//     );
// }


import React from 'react'

export default function Dictionary() {
    return (
        <div>
            <div className="dictionary">
                <div className="container">hello</div>
            </div>
        </div>
    )
}
