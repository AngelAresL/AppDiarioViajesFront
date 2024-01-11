const useDiferentsFetch = () => {
  const registerFetch = async (name, mail, pass, setStatusMesage) => {
    try {
      const response = await fetch("http://localhost:8000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name,
          email: mail,
          password: pass,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const data = await response.json();

      setStatusMesage(data.message);

      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const loginFetch = async (mail, pass, setStatusMesage, setToken) => {
    try {
      const response = await fetch("http://localhost:8000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: mail,
          password: pass,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const data = await response.json();
      console.log(data);
      console.log(data.data.token);
      setStatusMesage("ok");
      setToken(data.data.token);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const listEntryFetch = async (setEntry) => {
    try {
      const response = await fetch("http://localhost:8000/entries");
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const data = await response.json();
      setEntry(data.data.entries);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const newEntryFetch = async (title, place, description, e, token) => {
    let formData = new FormData();
    formData.append("title", title);
    formData.append("place", place);
    formData.append("description", description);
    formData.append("photoA", e.target.elements.photoA.files[0]);
    try {
      const response = await fetch("http://localhost:8000/entries", {
        method: "POST",
        headers: {
          Authorization: token,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      await response.json();
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return { registerFetch, loginFetch, listEntryFetch, newEntryFetch };
};
export default useDiferentsFetch;
