# 2-D Steady Heat Conduction

A simple but complete numerical demo of pure conduction across a rectangular domain.

---

## 1️⃣ Physical model

Homogeneous, isotropic medium, no internal heat source. Steady state:

$$
\nabla^2 T \;=\;
\frac{\partial^2 T}{\partial x^2} +
\frac{\partial^2 T}{\partial y^2} = 0
\tag{1}
$$

**Domain:** rectangle \(L_x \times L_y\).

**Boundary conditions (demo default):**
- Left: \(T = T_{\text{hot}}\) (Dirichlet)  
- Right: \(T = T_{\text{cold}}\) (Dirichlet)  
- Top & bottom: \( \frac{\partial T}{\partial y} = 0 \) (adiabatic)

This shows **pure conduction** from hot to cold wall; no fluid motion.

---

## 2️⃣ Numerical formulation

Uniform Cartesian grid \((i,j)\), second-order central differences:

$$
T_{i,j}^{*} =
\frac{(T_{i+1,j}+T_{i-1,j}) + \beta\,(T_{i,j+1}+T_{i,j-1})}
{2(1+\beta)},
\quad
\beta = \frac{\Delta x^2}{\Delta y^2}.
\tag{2}
$$

Iterative solvers:
- **Jacobi**,  
- **Gauss–Seidel**, or  
- **SOR** (\(\omega\in[1,2)\)).

Convergence when

\[
\max_{i,j}\,|T^{(n+1)}_{i,j} - T^{(n)}_{i,j}| < \varepsilon.
\tag{3}
\]

---

## 3️⃣ Post-processing

Heat flux from Fourier’s law (take \(k=1\) in the demo):

$$
\mathbf{q} = -\,\nabla T
= \left(
-\frac{\partial T}{\partial x},
-\frac{\partial T}{\partial y}
\right).
\tag{4}
$$

Average wall heat flux:

\[
\bar{q}_{\text{left}} =
\left\langle -\,\frac{\partial T}{\partial x} \right\rangle_{x=0},
\qquad
\bar{q}_{\text{right}} =
\left\langle -\,\frac{\partial T}{\partial x} \right\rangle_{x=L_x}.
\tag{5}
\]

---

## 4️⃣ Validation

In the 1-D limit (adiabatic top/bottom):

$$
T(x) = T_{\text{hot}} -
\bigl(T_{\text{hot}} - T_{\text{cold}}\bigr)\frac{x}{L_x}.
\tag{6}
$$

The numerical mid-line profile matches (6) closely.

---

## 5️⃣ Live demo

**Open app →**  
<https://heat-fluid-flow-playground-conduction.streamlit.app>

[Back to Home →](./index.md)
