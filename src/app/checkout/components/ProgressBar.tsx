"use client";

interface ProgressBarProps {
  current: "carrinho" | "entrega" | "pagamento" | "validacao";
}

export default function ProgressBar({ current }: ProgressBarProps) {
  const steps = [
    { id: "carrinho", icon: "icon-cart-check", label: "Carrinho" },
    { id: "entrega", icon: "icon-delivery", label: "Entrega" },
    { id: "pagamento", icon: "icon-creditcard", label: "Pagamento" },
    { id: "validacao", icon: "icon-checkmark-circle", label: "Validação" },
  ];

  const activeIndex = steps.findIndex((s) => s.id === current);

  return (

      <div className="row ng-star-inserted">
        <div className="col-xs-12">
          <ul data-qa="progress-bar" className="progress-bar ng-star-inserted">

            {steps.map((step, index) => {
              const isActive = index === activeIndex;
              const isCompleted = index < activeIndex;

              // MESMA REGRA DO EVENTIM:
              // - completed para passos anteriores
              // - active para o atual
              // - first sempre no primeiro item
              const classes = [
                "progress-bar-step",
                isCompleted ? "completed" : "",
                isActive ? "active" : "",
                index === 0 ? "first" : "",
                "ng-star-inserted",
              ]
                .join(" ")
                .trim();

              return (
                <li
                  key={step.id}
                  role="link"
                  data-qa="progress-step"
                  className={classes}
                  tabIndex={isActive ? 0 : -1}
                  title={step.label}
                  aria-label={step.label}
                >
                  <i className={`icon ${step.icon}`} aria-label={step.label}></i>
                </li>
              );
            })}

          </ul>
        </div>
      </div>

  );
}
