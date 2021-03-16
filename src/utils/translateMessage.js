const translateMessage = (code) => {
  const dictionary = {
    "auth/email-already-in-use": "El correo electónico ya esta en uso",
    "auth/weak-password": "La clave necesita tener mas de 6 digitos",
    "auth/user-not-found": "Usuario no registrado",
    "auth/wrong-password": "clave no válida",
  };
  return dictionary[code] || code;
};

export default translateMessage;
