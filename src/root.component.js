import React from "react";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@MyBodytech/mf-store-auth";

export default function Root() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HomeContent />
      </PersistGate>
    </Provider>
  );
}

function HomeContent() {
  const user = useSelector((state) => state.user.userData);
  const isAuth = useSelector((state) => state.user.isAuthenticated);

  if (!isAuth) {
    return <p>No estás autenticado. Por favor inicia sesión.</p>;
  }

  return (
    <section>
      <h2>Bienvenido, {user?.name || "Usuario"}</h2>
      <p>Correo: {user?.email}</p>
    </section>
  );
}
