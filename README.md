# PulseFit Studio – Assignment 2 (React + Vite + Tailwind)

Même projet que l'Assignment 1 (studio de fitness **PulseFit**), reconstruit avec
**Vite + React + Tailwind CSS**. Même type d'activité, même contenu, même look –
mais componentisé et piloté par les données.

## Démarrer
```bash
npm install      # installe React, Vite, Tailwind
npm run dev      # serveur de développement (http://localhost:5173)
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build
```

## Structure
```
assignement-numero-2/
├─ index.html              # point d'entrée Vite (monte #root)
├─ package.json
├─ vite.config.js
├─ tailwind.config.js      # couleurs via theme.extend.colors
├─ postcss.config.js
├─ public/                 # favicon, hero, photos des coachs
└─ src/
   ├─ main.jsx
   ├─ index.css            # @tailwind base/components/utilities
   ├─ App.jsx              # compose Header + Hero + MainContent + Footer
   ├─ data/
   │  ├─ classes.js        # <-- tableau d'objets du grid principal
   │  ├─ trainers.js
   │  └─ plans.js
   └─ components/
      ├─ Header.jsx
      ├─ Hero.jsx          # contient le seul <h1>
      ├─ MainContent.jsx   # filtre useState + état des steppers
      ├─ ClassCard.jsx     # une carte du grid, réutilise <Stepper/>
      ├─ Stepper.jsx       # composant contrôlé réutilisé par item
      └─ Footer.jsx
```

## Exigences couvertes
| Exigence | Où |
|---|---|
| Vite + React dans le repo | `package.json`, `vite.config.js`, `src/main.jsx` |
| Componentisé (header, hero, main, footer) | `src/components/*` |
| Items dans un fichier de données (array d'objets) | `src/data/classes.js` |
| Tailwind câblé, ancien `styles.css` supprimé | `index.css` + config ; plus de CSS manuel |
| 1 filtre réel sur le grid principal avec `useState` | `MainContent.jsx` (`activeCategory`) |
| 1 composant contrôlé réutilisé par item | `Stepper.jsx` (dans chaque `ClassCard`) |
| Classes responsive mobile-first | base → `sm:` `md:` `lg:` partout |
| Pas de scroll horizontal | `overflow-x-hidden`, largeurs `w-[min(...)]`, grids fluides |

## Comment ça marche (à savoir expliquer en évaluation)

### Le filtre avec `useState`
```js
const [activeCategory, setActiveCategory] = useState('All')
const visibleClasses =
  activeCategory === 'All'
    ? classes
    : classes.filter((c) => c.category === activeCategory)
```
- `activeCategory` est l'état ; `setActiveCategory` le met à jour.
- Cliquer un bouton de catégorie appelle `setActiveCategory(cat)`.
- React **re-rend** le composant ; `visibleClasses` est **recalculé** à partir de
  l'état, et le grid affiche la nouvelle liste. On ne touche jamais au DOM à la main.

### Le composant contrôlé `Stepper`
```jsx
<Stepper value={spots[item.id] || 0}
         onChange={(v) => setSpotsFor(item.id, v)} />
```
- Le `Stepper` **ne garde aucun état interne** : sa valeur arrive par `value`.
- Quand on clique + / −, il appelle `onChange(nouvelleValeur)`.
- Le **parent** (`MainContent`) détient l'état `spots` et décide de la nouvelle
  valeur → source unique de vérité. C'est le pattern « QuantityStepper ».

## Publier sur GitHub (dans le repo existant) avec de vrais petits commits
```bash
git add package.json vite.config.js postcss.config.js tailwind.config.js index.html
git commit -m "Scaffold Vite + React + Tailwind"

git add src/main.jsx src/index.css src/App.jsx
git commit -m "Add app entry and Tailwind directives"

git add src/data
git commit -m "Add classes, trainers and plans data files"

git add src/components/Header.jsx src/components/Hero.jsx src/components/Footer.jsx
git commit -m "Add Header, Hero and Footer components"

git add src/components/Stepper.jsx src/components/ClassCard.jsx
git commit -m "Add reusable controlled Stepper and ClassCard"

git add src/components/MainContent.jsx
git commit -m "Add main grid with useState category filter"

git add README.md .gitignore
git commit -m "Add README and gitignore"

git push
```

## Contraintes respectées
Pas de TypeScript, aucune librairie supplémentaire, données en dur (le backend
arrive en Week 3).
