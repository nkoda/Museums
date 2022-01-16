import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"20rem",background:"#FFFFFF", border:"2px solid grey", 
                        borderRadius:"5px", padding:"0.5rem", alignItems:"center", textAlign:"center"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"search NFT in Museums"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar