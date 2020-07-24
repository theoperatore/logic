import React from 'react';
import { animals } from '../engine/corpus/animals';
import { animalColors } from '../engine/corpus/animal-clolors';
import { banners } from '../engine/corpus/banner-color';
import { ornaments } from '../engine/corpus/ornaments';
import { solve } from '../engine';
import { OrnamentType } from '../engine/logic-types';

function RenderSolve({ nums, ornamentText }: { nums: number[]; ornamentText: string }) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{nums[0]}</td>
            <td>Blade</td>
          </tr>
          <tr>
            <td>{nums[1]}</td>
            <td>Crown</td>
          </tr>
          <tr>
            <td>{nums[2]}</td>
            <td>Sun</td>
          </tr>
          <tr>
            <td>{nums[3]}</td>
            <td>Tree</td>
          </tr>
        </tbody>
      </table>
      {ornamentText && <p>Special: {ornamentText}</p>}
    </div>
  );
}

function Index() {
  const [animalId, setAnimal] = React.useState('');
  const [animalColorId, setAnimalColor] = React.useState('');
  const [bannerColorId, setBannerColor] = React.useState('');
  const [ornamentId, setOrnament] = React.useState('');
  const [blade, setBlade] = React.useState(0);
  const [crown, setCrown] = React.useState(0);
  const [sun, setSun] = React.useState(0);
  const [tree, setTree] = React.useState(0);

  const animal = animals.find(a => a.id === animalId);
  const animalColor = animalColors.find(a => a.id === animalColorId);
  const bannerColor = banners.find(a => a.id === bannerColorId);
  const ornament = ornaments.find(a => a.id === ornamentId);

  let s = null;

  if (animal && animalColor && bannerColorId && ornament) {
    s = solve({ animal, animalColor, bannerColor, ornament, symbolNumbers: [blade, crown, sun, tree] });
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div>
        <h1>Configure puzzle</h1>
        <div style={{ paddingBottom: '24px' }}>
          <label htmlFor="animal-select">Select animal</label>
          <div>
            <select id="animal-select" value={animalId} onChange={ev => setAnimal(ev.target.value)}>
              <option value="" disabled>
                choose
              </option>
              {animals.map(a => (
                <option key={a.id} value={a.id}>
                  {a.display}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ paddingBottom: '24px' }}>
          <label htmlFor="animal-color-select">Select animal color</label>
          <div>
            <select id="animal-color-select" value={animalColorId} onChange={ev => setAnimalColor(ev.target.value)}>
              <option value="" disabled>
                choose
              </option>
              {animalColors.map(a => (
                <option key={a.id} value={a.id}>
                  {a.display}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ paddingBottom: '24px' }}>
          <label htmlFor="banner-color-select">Select banner color</label>
          <div>
            <select id="banner-color-select" value={bannerColorId} onChange={ev => setBannerColor(ev.target.value)}>
              <option value="" disabled>
                choose
              </option>
              {banners.map(a => (
                <option key={a.id} value={a.id}>
                  {a.display}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ paddingBottom: '24px' }}>
          <label htmlFor="ornament-select">Select ornament</label>
          <div>
            <select id="ornament-select" value={ornamentId} onChange={ev => setOrnament(ev.target.value)}>
              <option value="" disabled>
                choose
              </option>
              {ornaments.map(a => (
                <option key={a.id} value={a.id}>
                  {a.display}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ paddingBottom: '24px' }}>
          <label htmlFor="blade-input">Blade</label>
          <div>
            <input id="blade-input" value={blade} onChange={ev => setBlade(Number(ev.target.value))} />
          </div>
        </div>

        <div style={{ paddingBottom: '24px' }}>
          <label htmlFor="crown-input">Crown</label>
          <div>
            <input id="crown-input" value={crown} onChange={ev => setCrown(Number(ev.target.value))} />
          </div>
        </div>

        <div style={{ paddingBottom: '24px' }}>
          <label htmlFor="sun-input">Sun</label>
          <div>
            <input id="sun-input" value={sun} onChange={ev => setSun(Number(ev.target.value))} />
          </div>
        </div>

        <div style={{ paddingBottom: '24px' }}>
          <label htmlFor="tree-input">Tree</label>
          <div>
            <input id="tree-input" value={tree} onChange={ev => setTree(Number(ev.target.value))} />
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1>Selected inputs</h1>
          <div>
            <p>
              animal: {animal?.display} &mdash; {animal?.affects_symbol_ids.join(', ')}
            </p>
            <p>
              animal color: {animalColor?.display} &mdash; {animalColor?.effect_display}
            </p>
            <p>
              banner color: {bannerColor?.display} &mdash; {bannerColor?.effect_display}
            </p>
            <p>
              ornament: {ornament?.display} &mdash; {ornament?.text}
            </p>
            <table>
              <tbody>
                <tr>
                  <td>{blade}</td>
                  <td>Blade</td>
                </tr>
                <tr>
                  <td>{crown}</td>
                  <td>Crown</td>
                </tr>
                <tr>
                  <td>{sun}</td>
                  <td>Sun</td>
                </tr>
                <tr>
                  <td>{tree}</td>
                  <td>Tree</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h1>Solve</h1>
          {s && <RenderSolve nums={s} ornamentText={ornament.type === OrnamentType.TEXT ? ornament.text : ''} />}
        </div>
      </div>
    </div>
  );
}

export default Index;
