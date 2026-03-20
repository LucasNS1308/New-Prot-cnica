import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator as CalcIcon, TrendingDown } from "lucide-react";

const Calculator = () => {
  const [employees, setEmployees] = useState(100);
  const [accidentRate, setAccidentRate] = useState(5);

  const avgCostPerAccident = 15000;
  const reductionWithEPI = 0.7;
  const currentCost = employees * (accidentRate / 100) * avgCostPerAccident;
  const savings = currentCost * reductionWithEPI;

  return (
    <section className="py-24 bg-secondary/30" id="calculadora">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <CalcIcon className="h-8 w-8 text-primary mx-auto mb-4" />
            <h2 className="text-4xl md:text-6xl font-display mb-3">
              Simule o valor da sua{" "}
              <span className="text-gradient-amber">segurança</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Descubra como a escolha do EPI correto reduz o FAP e economiza milhares de reais em afastamentos.
            </p>
          </div>

          <div className="bg-gradient-card border border-border rounded-xl p-8">
            <div className="space-y-8">
              <div>
                <label className="flex justify-between text-sm mb-3">
                  <span className="text-muted-foreground">Número de colaboradores</span>
                  <span className="text-primary font-semibold">{employees}</span>
                </label>
                <input
                  type="range"
                  min={10}
                  max={5000}
                  step={10}
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-primary [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full"
                />
              </div>

              <div>
                <label className="flex justify-between text-sm mb-3">
                  <span className="text-muted-foreground">Taxa de acidentes (%)</span>
                  <span className="text-primary font-semibold">{accidentRate}%</span>
                </label>
                <input
                  type="range"
                  min={1}
                  max={20}
                  step={1}
                  value={accidentRate}
                  onChange={(e) => setAccidentRate(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-primary [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full"
                />
              </div>

              <div className="border-t border-border pt-6 grid sm:grid-cols-2 gap-6">
                <div className="bg-muted/50 rounded-lg p-5">
                  <p className="text-sm text-muted-foreground mb-1">Custo estimado sem EPIs adequados</p>
                  <p className="text-2xl font-display text-destructive">
                    R$ {currentCost.toLocaleString("pt-BR")}
                  </p>
                </div>
                <div className="bg-primary/10 rounded-lg p-5 border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-1 flex items-center gap-1">
                    <TrendingDown className="h-4 w-4 text-primary" />
                    Economia estimada com EPIs corretos
                  </p>
                  <p className="text-2xl font-display text-primary">
                    R$ {savings.toLocaleString("pt-BR")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Calculator;
