export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const isValidPassword = (password: string): boolean => {
    return (
        password.length >= 10 &&
        /^[A-Z]/.test(password) &&         // commence par une majuscule
        /[0-9]/.test(password) &&          // contient au moins un chiffre
        /[^A-Za-z0-9]/.test(password)      // contient au moins un symbole
    );
};
