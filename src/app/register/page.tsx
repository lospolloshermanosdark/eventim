"use client";

import { useState, useEffect } from "react";

export default function RegisterPage() {
    const [email] = useState(
        typeof window !== "undefined"
            ? localStorage.getItem("register_email") || ""
            : ""
    );

    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);

    const [validLength, setValidLength] = useState(false);
    const [validCase, setValidCase] = useState(false);
    const [validNumberSpecial, setValidNumberSpecial] = useState(false);

    const isPasswordValid = validLength && validCase && validNumberSpecial;

    // 🔥 Validação automática sempre que a senha muda
    useEffect(() => {
        const lengthRule = password.length >= 8;
        const caseRule = /[a-z]/.test(password) && /[A-Z]/.test(password);
        const numberSpecialRule =
            /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password);

        setValidLength(lengthRule);
        setValidCase(caseRule);
        setValidNumberSpecial(numberSpecialRule);

    }, [password]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!isPasswordValid) return;

        // salva o cadastro no localStorage
        localStorage.setItem("register_password", password);

        // envia código de verificação (fake)
        const verificationCode = String(
            Math.floor(100000 + Math.random() * 900000)
        );

        localStorage.setItem("verification_code", verificationCode);

        // redireciona para /verify-email
        window.location.href = "/verify-email";
    };

    return (
        <>
            {/* CSS padrão local */}
            <link
                id="ev-style-sheet"
                rel="stylesheet"
                href="/eventim/css/patterns.css"
            />

            <link rel="stylesheet" href="/eventim/css/eventim-theme.css" />
            <link
                rel="stylesheet"
                href="/eventim/css/patterns-62e9f0652c.css"
            />

            <div className="wrapper wrapper-container theme-page-bg fit-content-height">

                {/* HEADER */}
                <header className="searchheader theme-head-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="logo">
                                    <img
                                        id="main-logo"
                                        src="https://www.eventim.com.br/obj/media/BR-eventim/specialLogos/checkoutApp/logo.svg"
                                        className="searchheader-logo-image"
                                        alt="Ingressos para shows e eventos"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* CONTENT */}
                <main className="c container flex-1" id="mainContainer">
                    <div className="card theme-content-bg theme-text-color theme-element-radius standard-gray-shadow forced-default-line-height horizontal-centered-content min-height-500 eventim-modal-wrapper">

                        <div className="eventim-modal">
                            <h1 className="eventim-modal-label">Bem-vindo!</h1>
                        </div>

                        <div className="eventim-card-wrapper">
                            <form
                                id="kc-register-form"
                                className="card-content"
                                onSubmit={handleSubmit}
                            >

                                <section className="responsive-unit-separator eventim-card-headline">
                                    <h2>E-mail não cadastrado. Defina uma senha.</h2>
                                </section>

                                <section className="responsive-unit-separator">
                                    <div className="eventim-selected-email">
                                        <p id="selected-email">{email}</p>
                                    </div>

                                    <a
                                        tabIndex={0}
                                        role="link"
                                        href="/auth"
                                        className="is-not-you-input link focusable"
                                    >
                                        <p>Use um endereço de e-mail diferente</p>
                                    </a>
                                </section>

                                <section>
                                    <p className="paragraph">
                                        <label className="label theme-text-variant-color">
                                            Senha
                                        </label>
                                    </p>

                                    <div className="form-group password-wrapper">

                                        <input
                                            tabIndex={0}
                                            type={showPass ? "text" : "password"}
                                            id="password"
                                            className="form-control theme-text-color standard-gray-border theme-content-bg theme-element-radius"
                                            name="password"
                                            autoComplete="new-password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />


                                        {/* REGRAS */}
                                        <div id="requirements" className="password-requirements">
                                            <p className={`requirement ${validLength ? "valid" : ""}`}>
                                                min. 8 caracteres
                                            </p>
                                            <p className={`requirement ${validCase ? "valid" : ""}`}>
                                                Letras maiúsculas e minúsculas
                                            </p>
                                            <p className={`requirement ${validNumberSpecial ? "valid" : ""}`}>
                                                Números e caracteres especiais
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section className="submit forced-padding-top-12">

                                    <input
                                        tabIndex={0}
                                        id="registerButton"
                                        className="btn theme-interaction-btn-bg theme-btn-font-color theme-button-radius btn-primary btn-block btn-lg"
                                        type="submit"
                                        value="Cadastrar"
                                        disabled={!isPasswordValid}
                                        style={{
                                            opacity: isPasswordValid ? 1 : 0.5,
                                            cursor: isPasswordValid ? "pointer" : "not-allowed"
                                        }}
                                    />

                                    <p className="card-hint theme-text-light-color marginal-paragraph forced-padding-top-12 no-margin-bottom no-padding-bottom font-size-xs">
                                        Gostaria de me registrar no eventim.com.br como um novo cliente. Concordo que a EVENTIM BRASIL SAO PAULO SISTEMAS E SERVICOS DE INGRESSOS 
                                        LTDA tenha permissão para processar meus dados pessoais [por exemplo, o endereço de e-mail]. Você pode revogar seu consentimento a 
                                        qualquer momento. <br/><br/>A EVENTIM dá grande importância à proteção de dados. Você pode ler a declaração de proteção de dados 
                                        <a  role="link" className="link focusable" href="https://www.eventim.com.br/help/data-protection/" target="_blank">aqui</a>.</p>

                                </section>
                            </form>

                            <hr className="eventim-hr" />
                        </div>

                    </div>
                </main>
            </div>
        </>
    );
}
