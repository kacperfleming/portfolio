import React, { useState, useEffect } from "react";

const asyncComponent = (importComponent) => (() => {
    const [component, setComponent] = useState(null);

    useEffect(() => {
      importComponent().then((cmp) => setComponent(cmp.default));
    }, [importComponent]);

    const C = component;
    return C ? <C {...this.props} /> : null;
  })();

export default asyncComponent;