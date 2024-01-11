import PropTypes from "prop-types";

import { createContext, useState } from "react";

const TokenAuth = createContext();

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState("");

  return (
    <TokenAuth.Provider value={[token, setToken]}>
      {children}
    </TokenAuth.Provider>
  );
};
TokenProvider.propTypes = {
  children: PropTypes.object,
};
export default TokenAuth;
export { TokenProvider };
