

function getInput() {
  let inputField = document.querySelector("#input1");
  let input = inputField.value;
  let result = "nothing or please don't use caps.";

  if (["H", "Hydrogen", "hydrogen", "1"].indexOf(input) > -1) {
    result = "Name: Hydrogen<br>"
      + "Symbol: H<br>"
      + "Atomic mass: 1.00784 u<br>"
      + "Atomic number: 1<br>"
      + "Electronegativity: 2.2<br>"
      + "Electron configuration: 1s1<br>"
      + "Density (at STP): 0.08988 g/L<br>" + "Named by: Antoine Lavoisier (1783)<br>";
  }
  if (["He", "Helium", "helium", "2"].indexOf(input) > -1) {
    result = "Name: Helium<br>" + "Symbol: He" + "<br>Atomic number: 2<br>" + "Atomic mass: 4.002602 u<br>" + "Electrons per shell: 2<br>" + "Electron configuration: 1s2" + "<br>Discovery: Pierre Janssen, Norman Lockyer (1868)" + "<br>Natural occurrence: primordial";
  }



  if (["Li", "Lithium", "lithium", "3"].indexOf(input) > -1) {
    result = "Name: Lithium<br>" +
      "Symbol: Li<br>" +
      "Atomic number: 3<br>" +
      "Atomic mass: 6.941 u<br>" +
      "Electrons per shell: 2,1<br>" +
      "Electron configuration: [He] 2s1<br>" +
      "Natural occurrence: primordial<br>" +
      "Crystal structure: body-centered cubic (bcc)<br>";
  }

  if (["Be", "Beryllium", "beryllium", "4"].indexOf(input) > -1) {
    result = "Name: Beryllium<br>" +
      "Symbol: Be<br>" +
      "Atomic number: 4<br>" +
      "Atomic mass: 9.012182 u<br>" +
      "Electrons per shell: 2,2<br>" +
      "Electron configuration: [He] 2s²<br>" +
      "Electronegativity: 1.57<br>" +
      "Crystal structure: hexagonal close-packed (hcp)<br>";

  }
  if (["B", "Boron", "boron", "5"].indexOf(input) > -1) {
    result = "Name: Boron<br>" +
      "Symbol: B<br>" +
      "Atomic number: 5<br>" +
      "Atomic mass: 10.811 u<br>" +
      "Electron configuration: [He] 2s22p1<br>" +
      "Electrons per shell: 2,3<br>" +
      "Electronegativity: 2.04<br>" +
      "Period: Period 2 element<br>";
  }
  if (["C", "Carbon", "carbon", "6"].indexOf(input) > -1) {
    result = "Name: Carbon<br>" +
      "Atomic number: 6<br>" +
      "Symbol: C<br>" +
      "Recognized as an element by: Antoine Lavoisier (1789)<br>" +
      "Sublimation point: 3915 K (3642 °C, 6588 °F)<br>" +
      "Natural occurrence: primordial<br>" +
      "Triple point: 4600 K, 10,800 kPa<br>" +
      "Period: period 2<br>" +
      "Discovery: Egyptians and Sumerians (3750 BCE)<br>";
  }

  if (["N", "Nitrogen", "nitrogen", "7"].indexOf(input) > -1) {
    result = "Name: Nitrogen<br>" +
      "Symbol: N<br>" +
      "Atomic mass: 14.0067 u<br>" +
      "Atomic number: 7<br>" +
      "Electron configuration: [He] 2s22p3<br>" +
      "Density (at STP): 1.2506 g/L at 0 °C, 1013 mbar<br>" +
      "Triple point: 63.151 K, 12.52 kPa<br>" +
      "Named by: Jean-Antoine Chaptal (1790)<br>";
  }
  if (["O", "Oxygen", "oxygen", "8"].indexOf(input) > -1) {
    result = "Name: Oxygen<br>" +
      "Symbol: O<br>" +
      "Atomic mass: 15.999 u<br>" +
      "Atomic number: 8<br>" +
      "Electron configuration: [He] 2s²2p⁴<br>" +
      "Electronegativity: 3.44<br>" +
      "Electrons per shell: 2, 6<br>" +
      "Discoverers: Joseph Priestley, Antoine Lavoisier, Carl Wilhelm Scheele<br>";
  }
  if (["F", "Fluorine", "fluorine", "9"].indexOf(input) > -1) {
    result = "Name: Fluorine<br>" +
      "Symbol: F<br>" +
      "Atomic number: 9<br>" +
      "Atomic mass: 18.998403 u<br>" +
      "Electronegativity: 3.98<br>" +
      "Electron configuration: [He] 2s22p5<br>" +
      "Melting point: -219.6 °C<br>" +
      "Van der Waals radius: 147 pm<br>";
  }
  if (["Ne", "Neon", "neon", "10"].indexOf(input) > -1) {
    result = "Name: Neon<br>" +
      "Symbol: Ne<br>" +
      "Atomic number: 10<br>" +
      "Atomic mass: 20.1797 u<br>" +
      "Electrons per shell: 2,8<br>" +
      "When liquid (at b.p.): 1.207 g/cm3<br>" +
      "Period: period 2<br>" +
      "Oxidation states: 0<br>";
  }
  if (["Na", "Sodium", "sodium", "11"].indexOf(input) > -1) {
    result = "Name: Sodium<br>" +
      "Symbol: Na<br>" +
      "Atomic mass: 22.989769 u<br>" +
      "Electron configuration: [Ne] 3s¹<br>" +
      "Atomic number: 11<br>" +
      "Atomic radius: empirical: 186 pm<br>" +
      "When liquid (at m.p.): 0.927 g/cm3<br>" +
      "Crystal structure: body-centered cubic (bcc)<br>"
  }
  if (["Mg", "Magnesium", "magnesium", "12"].indexOf(input) > -1) {
    result = "Name: Magnesium<br>" +
      "Symbol: Mg<br>" +
      "Atomic number: 12<br>" +
      "Atomic mass: 24.305 u<br>" +
      "Electron configuration: [Ne] 3s2<br>" +
      "Oxidation number: 2<br>" +
      "Crystal structure: hexagonal close-packed (hcp)<br>" +
      "Discoverers: Humphry Davy, Joseph Black<br>"
  }

  if (["Al", "Aluminum", "aluminum", "13"].indexOf(input) > -1) {
    result = "Name: Aluminum<br>" +
      "Symbol: Al<br>" +
      "Atomic number: 13<br>" +
      "Atomic mass: 26.981539 u<br>" +
      "Electron configuration: [Ne] 3s²3p¹<br>" +
      "Electronegativity: 1.61<br>" +
      "Crystal structure: face-centered cubic (fcc)<br>" +
      "Density (near r.t.): 2.70 g/cm3<br>"
  }

  if (["Si", "Silicon", "silicon", "14"].indexOf(input) > -1) {
    result = "Name: Silicon<br>" +
      "Symbol: Si<br>" +
      "Atomic number: 14<br>" +
      "Atomic mass: 28.0855 u<br>" +
      "Electron configuration: [Ne] 3s²3p²<br>" +
      "Melting point: 1,414 °C<br>" +
      "Electrons per shell: 2, 8, 4<br>" +
      "Crystal structure: face-centered diamond-cubic<br>"
  }

  if (["P", "Phosphorus", "phosphorus", "15"].indexOf(input) > -1) {
    result = "Name: Phosphorus<br>" +
      "Symbol: P<br>" +
      "Atomic mass: 30.973762 u<br>" +
      "Atomic number: 15<br>" +
      "Electron configuration: [Ne] 3s²3p³<br>" +
      "Electrons per shell: 2, 8, 5<br>" +
      "Electronegativity: 2.19<br>" +
      "Recognised as an element by: Antoine Lavoisier (1777)<br>"
  }
  if (["S", "Sulfur", "sulfur", "16"].indexOf(input) > -1) {
    result = "Name: Sulfur<br>" +
      "Symbol: S<br>" +
      "Atomic mass: 32.065 u<br>" +
      "Atomic number: 16<br>" +
      "Electron configuration: [Ne] 3s²3p⁴<br>" +
      "Recognized as an element by: Antoine Lavoisier (1777)<br>" +
      "Natural occurrence: primordial<br>" +
      "Group: Chalcogen (group 16)<br>"
  }

  if (["Cl", "Chlorine", "chlorine", "17"].indexOf(input) > -1) {
    result = "Name: Chlorine<br>" +
      "Symbol: Cl<br>" +
      "Atomic mass: 35.453 u<br>" +
      "Atomic number: 17<br>" +
      "Electron configuration: [Ne] 3s²3p⁵<br>" +
      "Recognized as an element by: Humphry Davy (1808)<br>" +
      "When liquid (at b.p.): 1.5625 g/cm3<br>"
  }


  if (["Ar", "Argon", "argon", "18"].indexOf(input) > -1) {
    result = "Name: Argon<br>" +
      "Symbol: Ar<br>" +
      "Atomic mass: 39.948 u<br>" +
      "Electron configuration: [Ne] 3s²3p⁶<br>" +
      "Atomic number: 18<br>" +
      "When liquid (at b.p.): 1.3954 g/cm3<br>" +
      "Density (at STP): 1.784 g/L<br>"
  }


  if (["K", "Potassium", "potassium", "19"].indexOf(input) > -1) {
    result = "Name: Potassium<br>" +
      "Symbol: K<br>" +
      "Atomic mass: 39.0983 u<br>" +
      "Atomic number: 19<br>" +
      "Electron configuration: [Ar] 4s¹<br>" +
      "Van der Waals radius: 280 pm<br>" +
      "Boiling point: 758.8 °C<br>"
  }


  if (["Ca", "Calcium", "calcium", "20"].indexOf(input) > -1) {
    result = "Name: Calcium<br>Symbol: Ca<br>Atomic number: 20<br>Atomic mass: 40.078 u<br>Electron configuration: [Ar] 4s²<br>Atomic radius: empirical: 197 pm<br>Period: period 4<br>Crystal structure: face-centred cubic (fcc)"
  }
  if (["Sc", "Scandium", "scandium", "21"].indexOf(input) > -1) {
    result = "Name: Scandium<br>Symbol: Sc<br>Atomic number: 21<br>Atomic radius: empirical: 162 pm<br>Oxidation states: 0, +1, +2, +3 (an amphoteric oxide)<br>Period: period 4<br>Group: group 3<br>Naming: after Scandinavia"
  }
  if (["Ti", "Titanium", "titanium", "22"].indexOf(input) > -1) {
    result = "Name: Titanium<br>Symbol: Ti<br>Atomic number: 22<br>Atomic mass: 47.867 u<br>Electron configuration: [Ar] 3d24s2<br>Electrons per shell: 2, 8, 10, 2<br>Oxidation states: −2, −1, 0, +1, +2, +3, +4 (an amphoteric oxide)<br>Named by: Martin Heinrich Klaproth (1795)"
  }
  if (["V", "Vanadium", "vanadium", "23"].indexOf(input) > -1) {
    result = "Name: Vanadium<br>Atomic number: 23<br>Symbol: V<br>Oxidation states: −3, −1, 0, +1, +2, +3, +4, +5 (an amphoteric oxide)<br>Period: period 4<br>Atomic radius: empirical: 134 pm<br>Named by: Nils Gabriel Sefström (1830)<br>Crystal structure: body-centered cubic (bcc)<br>Natural occurrence: primordial"
  }


  if (["Cr", "Chromium", "chromium", "24"].indexOf(input) > -1) {
    result = "Name: Chromium<br>Symbol: Cr<br>Atomic number: 24<br>Atomic mass: 51.9961 u<br>Electron configuration: [Ar] 3d⁵4s¹<br>Melting point: 1,907 °C<br>Van der Waals radius: 200 pm<br>Boiling point: 2,672 °C"
  }

  if (["Mn", "Manganese", "manganese", "25"].indexOf(input) > -1) {
    result = "Name: Manganese<br>" +
      "Symbol: Mn<br>" +
      "Atomic number: 25<br>" +
      "Crystal structure: body-centered cubic (bcc)<br>" +
      "Magnetic ordering: paramagnetic<br>" +
      "Atomic radius: empirical: 127 pm<br>" +
      "Magnetic susceptibility: (α) +529.0·10−6 cm3/mol (293 K)<br>" +
      "Natural occurrence: primordial<br>"
  }
  if (["Fe", "Iron", "iron", "26"].indexOf(input) > -1) {
    result = "Name: Iron<br>" +
      "Symbol: Fe<br>" +
      "Atomic mass: 55.845 u<br>" +
      "Atomic number: 26<br>" +
      "Melting point: 1,538 °C<br>" +
      "Electron configuration: [Ar] 3d64s2<br>" +
      "Density: 7.874 g/cm³ (near room temperature)<br>" +
      "Natural occurrence: primordial<br>"
  }

  if (["Co", "Cobalt", "cobalt", "27"].indexOf(input) > -1) {
    result = "Name: Cobalt<br>" +
      "Symbol: Co<br>" +
      "Atomic number: 27<br>" +
      "Atomic mass: 58.933195 u<br>" +
      "Oxidation states: −3, −1, 0, +1, +2, +3, +4, +5 (an amphoteric oxide)<br>" +
      "Natural occurrence: primordial<br>" +
      "Atomic radius: empirical: 125 pm<br>" +
      "Crystal structure: hexagonal close-packed (hcp)<br>"
  }


  if (["Ni", "Nickel", "nickel", "28"].indexOf(input) > -1) {
    result = "Name: Nickel<br>" +
      "Symbol: Ni<br>" +
      "Atomic mass: 58.6934 u<br>" +
      "Atomic number: 28<br>" +
      "Electron configuration: [Ar] 3d⁸4s²<br>" +
      "Oxidation states: −2, −1, 0, +1, +2, +3, +4 (a mildly basic oxide)<br>" +
      "Crystal structure: face-centered cubic (fcc)<br>" +
      "Atomic radius: empirical: 124 pm<br>"
  }


  if (["Cu", "Copper", "copper", "29"].indexOf(input) > -1) {
    result = "Name: Copper<br>" +
      "Symbol: Cu<br>" +
      "Atomic mass: 63.546 u<br>" +
      "Atomic number: 29<br>" +
      "Electron configuration: [Ar] 3d¹⁰4s¹<br>" +
      "Melting point: 1,085 °C<br>" +
      "Density: 8.96 g/cm³ (Near room temperature)<br>" +
      "Crystal structure: face-centered cubic (fcc)<br>"
  }

  if (["Zn", "Zinc", "zinc", "30"].indexOf(input) > -1) {
    result = "Name: Zinc<br>" +
      "Symbol: Zn<br>" +
      "Atomic mass: 65.38 u<br>" +
      "Atomic number: 30<br>" +
      "Electron configuration: [Ar] 3d¹⁰4s²<br>" +
      "Recognized as a unique metal by: Rasaratna Samuccaya (1300)<br>" +
      "Oxidation states: −2, 0, +1, +2 (an amphoteric oxide)<br>" +
      "Crystal structure: hexagonal close-packed (hcp)"
  }

  if (["Ga", "Gallium", "gallium", "31"].indexOf(input) > -1) {
    result = "Name: Gallium<br>" +
      "Symbol: Ga<br>" +
      "Atomic number: 31<br>" +
      "Atomic mass: 69.723 u<br>" +
      "Electron configuration: [Ar] 3d104s24p1<br>" +
      "When liquid (at m.p.): 6.095 g/cm3<br>" +
      "Atomic radius: empirical: 135 pm<br>" +
      "Crystal structure: orthorhombic<br>"
  }


  if (["Ge", "Germanium", "germainum", "32"].indexOf(input) > -1) {
    result = "Name: Germanium<br>" +
      "Symbol: Ge<br>" +
      "Atomic number: 32<br>" +
      "Electron configuration: [Ar] 3d¹⁰4s²4p²<br>" +
      "Atomic mass: 72.64 u<br>" +
      "Atomic radius: empirical: 122 pm<br>" +
      "Crystal structure: face-centered diamond-cubic<br>" +
      "Electrons per shell: 2, 8, 18, 4<br>"
  }


  if (["As", "Arsenic", "arsenic", "33"].indexOf(input) > -1) {
    result = "Name: Arsenic<br>" +
      "Symbol: As<br>" +
      "Atomic number: 33<br>" +
      "Atomic radius: empirical: 119 pm<br>" +
      "Crystal structure: rhombohedral<br>" +
      "Oxidation states: −3, −2, −1, 0, +1, +2, +3, +4, +5 (a mildly acidic oxide)<br>" +
      "Natural occurrence: primordial<br>" +
      "Period: period 4<br>"
  }
  if (["Se", "Selenium", "selenium", "34"].indexOf(input) > -1) {
    result = "Name: Selenium<br>" +
      "Symbol: Se<br>" +
      "Atomic number: 34<br>" +
      "Atomic mass: 78.96 u<br>" +
      "Electrons per shell: 2,8,18,6<br>" +
      "Electron configuration: [Ar] 3d104s24p4<br>" +
      "Crystal structure: hexagonal<br>" +
      "Period: period 4<br>"
  }



  if (["Br", "Bromine", "bromine", "35"].indexOf(input) > -1) {
    result = "Name: Bromine<br>" +
      "Symbol: Br<br>" +
      "Atomic number: 35<br>" +
      "Atomic mass: 79.904 u<br>" +
      "Electron configuration: [Ar] 4s²3d¹⁰4p⁵<br>" +
      "Atomic radius: empirical: 120 pm<br>" +
      "Period: period 4<br>" +
      "Oxidation states: −1, +1, +3, +4, +5, +7 (a strongly acidic oxide)<br>"
  }


  if (["Kr", "Krypton", "krypton", "36"].indexOf(input) > -1) {
    result = "Name: Krypton<br>" +
      "Symbol: Kr<br>" +
      "Atomic number: 36<br>" +
      "Atomic mass: 83.798 u<br>" +
      "Electron configuration: [Ar] 3d¹⁰4s²4p⁶<br>" +
      "Period: period 4<br>" +
      "Crystal structure: face-centered cubic (fcc)<br>" +
      "Oxidation states: 0, +1, +2 (rarely more than 0; oxide is unknown)<br>"
  }


  if (["Rb", "Rubidium", "rubidium", "37"].indexOf(input) > -1) {
    result = "Name: Rubidium<br>" +
      "Symbol: Rb<br>" +
      "Atomic number: 37<br>" +
      "Electron configuration: [Kr] 5s¹<br>" +
      "Atomic mass: 85.4678 u<br>" +
      "Period: period 5<br>" +
      "Electrons per shell: 2, 8, 18, 8, 1<br>" +
      "Crystal structure: body-centered cubic (bcc)<br>"
  }
  if (["Sr", "Strontium", "strontium", "38"].indexOf(input) > -1) {
    result = "Name: Strontium<br>" +
      "Symbol: Sr<br>" +
      "Atomic number: 38<br>" +
      "Electrons per shell: 2,8,18,8,2<br>" +
      "Electron configuration: [Kr] 5s2<br>" +
      "Atomic mass: 87.62 u<br>" +
      "Period: period 5<br>" +
      "Natural occurrence: primordial<br>"
  }
  if (["Y", "Yttrium", "yttrium", "39"].indexOf(input) > -1) {
    result = "Name: Yttrium<br>" +
      "Symbol: Y<br>" +
      "Atomic number: 39<br>" +
      "Electron configuration: [Kr] 4d15s2<br>" +
      "Period: period 5<br>" +
      "Oxidation states: 0, +1, +2, +3 (a weakly basic oxide)<br>" +
      "Naming: after Ytterby (Sweden) and its mineral ytterbite (gadolinite)<br>" +
      "Crystal structure: hexagonal close-packed (hcp)<br>"
  }


  if (["Zr", "Zirconium", "zirconium", "40"].indexOf(input) > -1) {
    result = "Name: Zirconium<br>" +
      "Symbol: Zr<br>" +
      "Atomic number: 40<br>" +
      "Atomic mass: 91.224 u<br>" +
      "Electron configuration: [Kr] 4d²5s²<br>" +
      "Oxidation states: −2, 0, +1, +2, +3, +4 (an amphoteric oxide)<br>" +
      "Atomic radius: empirical: 160 pm<br>" +
      "Crystal structure: hexagonal close-packed (hcp)<br>"
  }
  if (["Nb", "Niobium", "niobium", "41"].indexOf(input) > -1) {
    result = "Name: Niobium<br>" +
      "Symbol: Nb<br>" +
      "Atomic mass: 92.90638 u<br>" +
      "Electron configuration: [Kr] 4d⁴5s¹<br>" +
      "Atomic number: 41<br>" +
      "Melting point: 2,477 °C<br>" +
      "Van der Waals radius: 207 pm<br>" +
      "Discovered: 1801<br>"
  }
  if (["Mo", "Molybdenum", "molybdenum", "42"].indexOf(input) > -1) {
    result = "Name: Molybdenum<br>" +
      "Symbol: Mo<br>" +
      "Atomic mass: 95.95 u<br>" +
      "Atomic number: 42<br>" +
      "Electron configuration: [Kr] 4d₅5s₁<br>" +
      "Melting point: 2,623 °C<br>" +
      "Discovered: 1778<br>" +
      "Electronegativity: 2.16<br>"
  }


  if (["Tc", "Technetium", "technetium", "43"].indexOf(input) > -1) {
    result = "Name: Technetium<br>" +
      "Symbol: Tc<br>" +
      "Atomic mass: 98 u<br>" +
      "Atomic number: 43<br>" +
      "Electron configuration: [Kr] 4d55s2<br>" +
      "Discovered: 1937<br>" +
      "Melting point: 2,157 °C<br>" +
      "Discoverers: Emilio Segrè, Carlo Perrier<br>"
  }

  if (["Ru", "Ruthenium", "ruthenium", "44"].indexOf(input) > -1) {
    result = "Name: Ruthenium<br>" +
      "Symbol: Ru<br>" +
      "Atomic mass: 101.07 u<br>" +
      "Electron configuration: [Kr] 4d75s1<br>" +
      "Atomic number: 44<br>" +
      "Melting point: 2,334 °C<br>" +
      "Van der Waals radius: 205 pm<br>" +
      "CAS ID: 7440-18-8<br>"
  }

  if (["Rh", "Rhodium", "rhodium", "45"].indexOf(input) > -1) {
    result = "Name: Rhodium<br>" +
      "Symbol: Rh<br>" +
      "Atomic mass: 102.9055 u<br>" +
      "Electron configuration: [Kr] 4d85s1<br>" +
      "Atomic number: 45<br>" +
      "CAS ID: 7440-16-<br>" +
      "Melting point: 1,964 °C<br>" +
      "Discovered: 1803<br>"
  }

  if (["Pd", "Palladium", "palladium", "46"].indexOf(input) > -1) {
    result = "Name: Palladium<br>" +
      "Symbol: Pd<br>" +
      "Atomic number: 46<br>" +
      "Atomic mass: 106.42 u<br>" +
      "Electron configuration: [Kr] 4d¹⁰<br>" +
      "Melting point: 1,555 °C<br>" +
      "Discovered: 1802<br>" +
      "Chemical series: Metal, Transition metal, Toxic heavy metal, Period 5 element, Group 10 element<br>"
  }
  if (["Ag", "Silver", "silver", "47"].indexOf(input) > -1) {
    result = "Name: Silver<br>" +
      "Symbol: Ag<br>" +
      "Atomic mass: 107.8682 u<br>" +
      "Atomic number: 47<br>" +
      "Electron configuration: [Kr] 4d¹⁰5s¹<br>" +
      "Melting point: 961.8 °C<br>" +
      "Density: 10.49 g/cm³<br>" +
      "Boiling point: 2,162 °C<br>"
  }

  if (["Cd", "Cadium", "cadium", "48"].indexOf(input) > -1) {
    result = "Name: Cadmium<br>" +
      "Symbol: Cd<br>" +
      "Electron configuration: [Kr] 4d¹⁰5s²<br>" +
      "Atomic mass: 112.411 u<br>" +
      "Atomic number: 48<br>" +
      "Melting point: 321.1 °C<br>" +
      "Discovered: 1817<br>" +
      "CAS ID: 7440-43-9<br>"
  }
  if (["In", "Indium", "indium", "49"].indexOf(input) > -1) {
    result = "Name: Indium<br>" +
      "Symbol: In<br>" +
      "Atomic mass: 114.818 u<br>" +
      "Atomic number: 49<br>" +
      "Electron configuration: [Kr] 4d105s25p1<br>" +
      "Melting point: 156.6 °C<br>" +
      "Van der Waals radius: 220 pm<br>" +
      "Electronegativity: 1.78<br>"
  }
  if (["Sn", "Tin", "tin", "50"].indexOf(input) > -1) {
    result = "Name: Tin<br>" +
      "Symbol: Sn<br>" +
      "Electrons per shell: 2, 8, 18, 18, 4<br>" +
      "Atomic mass: 118.71 u<br>" +
      "Atomic number: 50<br>" +
      "Electron configuration: [Kr] 5s²4d¹⁰5p²<br>" +
      "Melting point: 231.9 °C<br>" +
      "Electronegativity: 1.96<br>"
  }

  if (["Sb", "Antimony", "antimony", "51"].indexOf(input) > -1) {
    result = "Name: Antimony<br>" +
      "Symbol: Sb<br>" +
      "Atomic mass: 121.76 u<br>" +
      "Atomic number: 51<br>" +
      "Electron configuration: [Kr] 4d105s25p3<br>" +
      "Melting point: 630.6 °C<br>" +
      "Discovered: 3000 BC<br>" +
      "Van der Waals radius: 206 pm<br>"
  }
  if (["Te", "Tellurium", "tellurium", "52"].indexOf(input) > -1) {
    result = "Name: Tellurium<br>" +
      "Symbol: Te<br>" +
      "Electrons per shell: 2,8,18,18,6<br>" +
      "Atomic mass: 127.6 u<br>" +
      "Atomic number: 52<br>" +
      "Electron configuration: [Kr] 4d105s25p4<br>" +
      "Electronegativity: 2.1<br>" +
      "Van der Waals radius: 210 pm<br>"
  }

  if (["I", "Iodine", "iodine", "53"].indexOf(input) > -1) {
    result = "Name: Iodine<br>" +
      "Symbol: I<br>" +
      "Atomic mass: 126.90447 u<br>" +
      "Atomic number: 53<br>" +
      "Electron configuration: [Kr] 4d105s25p5<br>" +
      "Electronegativity: 2.66<br>" +
      "Melting point: 113.7 °C<br>" +
      "Discovered: 1811<br>"
  }

  if (["Xe", "Xenon", "xenon", "54"].indexOf(input) > -1) {
    result = "Name: Xenon<br>" +
      "Symbol: Xe<br>" +
      "Atomic mass: 131.293 u<br>" +
      "Electrons per shell: 2,8,18,18,8<br>" +
      "Atomic number: 54<br>" +
      "Electron configuration: [Kr] 4d¹⁰5s²5p⁶<br>" +
      "Boiling point: -108.1 °C<br>" +
      "Melting point: -111.8 °C<br>"
  }
  if (["Cs", "Caesium", "caesium", "55"].indexOf(input) > -1) {
    result = "Name: Caesium<br>" +
      "Symbol: Cs<br>" +
      "Atomic mass: 132.90545 u<br>" +
      "Atomic number: 55<br>" +
      "Electron configuration: [Xe] 6s1<br>" +
      "Melting point: 28.44 °C<br>" +
      "Van der Waals radius: 343 pm<br>" +
      "Electronegativity: 0.79<br>"
  }
  if (["Ba", "Barium", "barium", "56"].indexOf(input) > -1) {
    result = "Name: Barium<br>" +
      "Symbol: Ba<br>" +
      "Atomic mass: 137.327 u<br>" +
      "Atomic number: 56<br>" +
      "Electron configuration: [Xe] 6s2<br>" +
      "Van der Waals radius: 268 pm<br>" +
      "Electronegativity: 0.89<br>" +
      "Melting point: 727 °C<br>"
  }

  if (["La", "Lanthanum", "lanthanum", "57"].indexOf(input) > -1) {
    result = "Name: Lanthanum<br>" +
      "Symbol: La<br>" +
      "Atomic mass: 138.90547 u<br>" +
      "Electron configuration: [Xe] 5d¹6s²<br>" +
      "Atomic number: 57<br>" +
      "Discovered: 1839<br>" +
      "Van der Waals radius: 250 pm<br>" +
      "Melting point: 920 °C<br>"
  }
  if (["Ce", "Cerium", "Cerium", "58"].indexOf(input) > -1) {
    result = "Name: Cerium<br>" +
      "Symbol: Ce<br>" +
      "Atomic mass: 140.116 u<br>" +
      "Atomic number: 58<br>" +
      "Electron configuration: [Xe] 4f¹5d¹6s²<br>" +
      "Van der Waals radius: 248 pm<br>" +
      "CAS ID: 7440-45-1<br>" +
      "Discovered: 1803<br>"
  }
  if (["Pr", "Praseodymium", "praseodymium", "59"].indexOf(input) > -1) {
    result = "Name: Praseodymium<br>" +
      "Symbol: Pr<br>" +
      "Electron configuration: [Xe] 4f36s2<br>" +
      "Discovered: 1885<br>" +
      "Atomic number: 59<br>" +
      "Atomic mass: 140.90765 u<br>" +
      "CAS ID: 7440-10-0<br>" +
      "Melting point: 931 °C<br>"
  }
  if (["Nd", "Neodymium", "neodymium", "60"].indexOf(input) > -1) {
    result = "Name: Neodymium<br>" +
      "Symbol: Nd<br>" +
      "Electron configuration: [Xe] 4f⁴6s²<br>" +
      "Atomic number: 60<br>" +
      "Atomic mass: 144.242 u<br>" +
      "Discovered: 1885<br>" +
      "Van der Waals radius: 229 pm<br>" +
      "CAS ID: 7440-00-8<br>"
  }
  if (["Pm", "Promethium", "promethium", "61"].indexOf(input) > -1) {
    result = "Name: Promethium<br>" +
      "Symbol: Pm<br>" +
      "Atomic mass: 145 u<br>" +
      "Electron configuration: [Xe] 4f56s2<br>" +
      "Discovered: 1945<br>" +
      "Atomic number: 61<br>" +
      "CAS ID: 7440-12-2<br>" +
      "Discoverers: Jacob A. Marinsky, Charles D. Coryell, Lawrence E. Glendenin<br>"
  }
  if (["Sm", "Samarium", "samarium", "62"].indexOf(input) > -1) {
    result = "Name: Samarium<br>" +
      "Symbol: Sm<br>" +
      "Atomic mass: 150.36 u<br>" +
      "Electron configuration: [Xe] 4f⁶6s²<br>" +
      "Atomic number: 62<br>" +
      "Discovered: 1879<br>" +
      "Melting point: 1,072 °C<br>" +
      "Discoverers: Paul-Émile Lecoq de Boisbaudran, Eugène-Anatole Demarçay<br>"
  }
  if (["Eu", "Europium", "eurpoium", "63"].indexOf(input) > -1) {
    result = "Name: Europium<br>" +
      "Symbol: Eu<br>" +
      "Atomic mass: 151.964 u<br>" +
      "Electron configuration: [Xe] 4f76s2<br>" +
      "Atomic number: 63<br>" +
      "Discovered: 1901<br>" +
      "Van der Waals radius: 240 pm<br>" +
      "Discoverers: Eugène-Anatole Demarçay, Paul-Émile Lecoq de Boisbaudran<br>"
  }
  if (["Gd", "Gadolinium", "gadolinium", "64"].indexOf(input) > -1) {
    result = "Name: Gadolinium<br>" +
      "Symbol: Gd<br>" +
      "Atomic mass: 157.25 u<br>" +
      "Electron configuration: [Xe] 4f75d16s2<br>" +
      "Atomic number: 64<br>" +
      "Discovered: 1880<br>" +
      "Van der Waals radius: 238 pm<br>" +
      "Discoverers: Jean Charles Galissard de Marignac, Paul-Émile Lecoq de Boisbaudran<br>"
  }

  if (["Tb", "Terbium", "terbium", "65"].indexOf(input) > -1) {
    result = "Name: Terbium<br>" +
      "Symbol: Tb<br>" +
      "Atomic mass: 158.92535 u<br>" +
      "Electron configuration: [Xe] 4f96s2<br>" +
      "Atomic number: 65<br>" +
      "Electrons per shell: 2,8,18,27,8,2<br>" +
      "Discovered: 1843<br>" +
      "Discoverer: Carl Gustaf Mosander<br>"
  }
  if (["Dy", "Dysprosium", "dysprosium", "66"].indexOf(input) > -1) {
    result = "Name: Dysprosium<br>" +
      "Symbol: Dy<br>" +
      "Atomic mass: 162.5 u<br>" +
      "Electron configuration: [Xe] 4f106s2<br>" +
      "Atomic number: 66<br>" +
      "Discovered: 1886<br>" +
      "Van der Waals radius: 235 pm<br>" +
      "Discoverer: Paul-Émile Lecoq de Boisbaudran<br>"
  }
  if (["Ho", "Holmium", "holmium", "67"].indexOf(input) > -1) {
    result = "Name: Holmium<br>" +
      "Symbol: Ho<br>" +
      "Electrons per shell: 2,8,18,29,8,2<br>" +
      "Electron configuration: [Xe] 4f116s2<br>" +
      "Atomic number: 67<br>" +
      "Atomic mass: 164.93032 u<br>" +
      "Discovered: 1878<br>" +
      "Discoverers: Per Teodor Cleve, Jacques-Louis Soret, Marc Delafontaine<br>"
  }
  if (["Er", "Erbium", "erbium", "68"].indexOf(input) > -1) {
    result = "Name: Erbium<br>" +
      "Symbol: Er<br>" +
      "Atomic mass: 167.259 u<br>" +
      "Electron configuration: [Xe] 4f126s2<br>" +
      "Atomic number: 68<br>" +
      "CAS ID: 7440-52-0<br>" +
      "Discovered: 1843<br>" +
      "Van der Waals radius: 232 pm<br>"
  }
  if (["Tm", "Thulium", "thulium", "69"].indexOf(input) > -1) {
    result = "Name: Thulium<br>" +
      "Symbol: Tm<br>" +
      "Atomic number: 69<br>" +
      "Electron configuration: [Xe] 4f136s2<br>" +
      "CAS ID: 7440-30-4<br>" +
      "Atomic mass: 168.93421 u<br>" +
      "Discovered: 1879<br>" +
      "Discoverer: Per Teodor Cleve<br>"
  }
  if (["Yb", "Ytterium", "ytterbium", "70"].indexOf(input) > -1) {
    result = "Name: Ytterbium<br>" +
      "Symbol: Yb<br>" +
      "Atomic mass: 173.04 u<br>" +
      "Electron : [Xe] 4f146s2<br>" +
      "Atomic number: 70<br>" +
      "CAS ID: 7440-64-4<br>" +
      "Electrons per shell: 2,8,18,32,8,2<br>" +
      "Discoverer: Jean Charles Galissard de Marignac<br>"
  }
  if (["Lu", "Lutetium", "lutetium", "71"].indexOf(input) > -1) {
    result = "Name: Lutetium<br>" +
      "Symbol: Lu<br>" +
      "Electron configuration: [Xe] 4f145d16s2<br>" +
      "Atomic number: 71<br>" +
      "CAS ID: 7439-94-3<br>" +
      "Van der Waals radius: 227 pm<br>" +
      "Atomic mass: 174.967 u<br>" +
      "Discovered: 1907<br>"
  }

  if (["Hf", "Hafnium", "hafnium", "72"].indexOf(input) > -1) {
    result = "Name: Hafnium<br>" +
      "Symbol: Hf<br>" +
      "Atomic mass: 178.49 u<br>" +
      "Atomic number: 72<br>" +
      "Electron configuration: [Xe] 4f¹⁴5d²6s²<br>" +
      "Van der Waals radius: 225 pm<br>" +
      "Electronegativity: 1.3<br>" +
      "Melting point: 2,233 °C<br>"
  }
  if (["Ta", "Tantalum", "tantalum", "73"].indexOf(input) > -1) {
    result = "Name: Tantalum<br>" +
      "Symbol: Ta<br>" +
      "Atomic mass: 180.94788 u<br>" +
      "Atomic number: 73<br>" +
      "Electron configuration: [Xe] 4f145d36s2<br>" +
      "Melting point: 3,017 °C<br>" +
      "Van der Waals radius: 220 pm<br>" +
      "Chemical series: Metal, Transition metal, Toxic heavy metal, Group 5 element, Period 6 element<br>"
  }
  if (["W", "Tungsten", "tungsten", "74"].indexOf(input) > -1) {
    result = "Name: Tungsten<br>" +
      "Symbol: W<br>" +
      "Atomic mass: 183.84 u<br>" +
      "Atomic number: 74<br>" +
      "Electron configuration: [Xe] 6s²4f¹⁴5d⁴<br>" +
      "Melting point: 3,422 °C<br>" +
      "Boiling point: 5,555 °C<br>" +
      "Discoverer: Carl Wilhelm Scheele<br>"
  }

  if (["Re", "Rhenium", "rhenium", "75"].indexOf(input) > -1) {
    result = "Name: Rhenium<br>" +
      "Symbol: Re<br>" +
      "Electrons per shell: 2, 8, 18, 32, 13, 2<br>" +
      "Electron configuration: [Xe] 4f145d56s2<br>" +
      "Atomic number: 75<br>" +
      "Atomic mass: 186.207 u<br>" +
      "Melting point: 3,185 °C<br>" +
      "Discoverers: Ida Noddack, Walter Noddack, Otto Berg<br>"
  }
  if (["Os", "Osmium", "osmium", "76"].indexOf(input) > -1) {
    result = "Name: Osmium<br>" +
      "Symbol: Os<br>" +
      "Atomic mass: 190.23 u<br>" +
      "Atomic number: 76<br>" +
      "Electron configuration: [Xe] 4f145d66s2<br>" +
      "Melting point: 3,033 °C<br>" +
      "CAS ID: 7440-04-2<br>" +
      "Chemical series: Metal, Transition metal, Toxic heavy metal, Period 6 element, Group 8 element<br>"
  }

  if (["Ir", "Iridium", "iridium", "77"].indexOf(input) > -1) {
    result = "Name: Iridium<br>" +
      "Symbol: Ir<br>" +
      "Atomic mass: 192.217 u<br>" +
      "Electron configuration: [Xe] 4f145d76s2<br>" +
      "Atomic number: 77<br>" +
      "Melting point: 2,466 °C<br>" +
      "Van der Waals radius: 200 pm<br>" +
      "Discoverer: Smithson Tennant<br>"
  }
  if (["Pt", "Platinum", "platinum", "78"].indexOf(input) > -1) {
    result = "Name: Platinum<br>" +
      "Symbol: Pt<br>" +
      "Atomic mass: 195.084 u<br>" +
      "Atomic number: 78<br>" +
      "Electron configuration: [Xe] 4f145d96s1<br>" +
      "Melting point: 1,768 °C<br>" +
      "Boiling point: 3,825 °C<br>" +
      "Discoverer: Antonio de Ulloa<br>"
  }
  if (["Au", "Gold", "gold", "79"].indexOf(input) > -1) {
    result = "Name: Gold<br>" +
      "Symbol: Au<br>" +
      "Electron configuration: [Xe] 4f145d106s1<br>" +
      "Melting point: 1,064 °C<br>" +
      "Atomic number: 79<br>" +
      "Atomic mass: 196.96657 u<br>" +
      "Boiling point: 2,700 °C<br>" +
      "Symbol of: California, Alaska<br>"
  }

  if (["Hg", "Mercury", "mercury", "80"].indexOf(input) > -1) {
    result = "Name: Mercury<br>" +
      "Symbol: Hg<br>" +
      "Electrons per shell: 2,8,18,32,18,2<br>" +
      "Atomic mass: 200.59 u<br>" +
      "Atomic number: 80<br>" +
      "Boiling point: 356.7 °C<br>" +
      "Melting point: -38.83 °C<br>" +
      "Electron configuration: [Xe] 4f145d106s2<br>"
  }

  if (["Tl", "Thallium", "thallium", "81"].indexOf(input) > -1) {
    result = "Name: Thallium<br>" +
      "Symbol: Tl<br>" +
      "Atomic mass: 204.3833 u<br>" +
      "Atomic number: 81<br>" +
      "Electron configuration: [Xe] 4f145d106s26p1<br>" +
      "Melting point: 304 °C<br>" +
      "Electronegativity: 1.62<br>" +
      "Van der Waals radius: 220 pm<br>"
  }
  if (["Pb", "Lead", "lead", "82"].indexOf(input) > -1) {
    result = "Name: Lead<br>" +
      "Symbol: Pb<br>" +
      "Atomic mass: 207.2 u<br>" +
      "Atomic number: 82<br>" +
      "Melting point: 327.5 °C<br>" +
      "Electron configuration: [Xe] 6s²4f¹⁴5d¹⁰6p²<br>" +
      "Electrons per shell: 2,8,18,32,18,4<br>" +
      "Boiling point: 1,749 °C<br>"
  }

  if (["Bi", "Bismuth", "bismuth", "83"].indexOf(input) > -1) {
    result = "Name: Bismuth<br>" +
      "Symbol: Bi<br>" +
      "Atomic mass: 208.9804 u<br>" +
      "Atomic number: 83<br>" +
      "Electron configuration: [Xe] 4f145d106s26p3<br>" +
      "Melting point: 271.4 °C<br>" +
      "Van der Waals radius: 230 pm<br>" +
      "Discoverer: Claude François Geoffroy<br>"
  }

  if (["Po", "Polonium", "polonium", "84"].indexOf(input) > -1) {
    result = "Name: Polonium<br>" +
      "Symbol: Po<br>" +
      "Atomic mass: 209 u<br>" +
      "Electrons per shell: 2,8,18,32,18,6<br>" +
      "Atomic number: 84<br>" +
      "Electron configuration: [Xe] 6s24f145d106p4<br>" +
      "Discovered: 1898<br>" +
      "Discoverers: Marie Curie, Pierre Curie<br>"
  }
  if (["At", "Astatine", "astatine", "85"].indexOf(input) > -1) {
    result = "Name: Astatine<br>" +
      "Symbol: At<br>" +
      "Atomic mass: 210 u<br>" +
      "Atomic number: 85<br>" +
      "Electron configuration: [Xe] 4f¹⁴5d¹⁰6s²6p⁵<br>" +
      "Melting point: 302 °C<br>" +
      "Boiling point: 336.8 °C<br>" +
      "Van der Waals radius: 200 pm<br>"
  }
  if (["Rn", "Radon", "radon", "86"].indexOf(input) > -1) {
    result = "Name: Radon<br>" +
      "Symbol: Rn<br>" +
      "Electrons per shell: 2,8,18,32,18,8<br>" +
      "Atomic number: 86<br>" +
      "Electron configuration: [Xe] 4f145d106s26p6<br>" +
      "Boiling point: -61.7 °C<br>" +
      "Melting point: -71 °C<br>" +
      "Discovered: 1900<br>"
  }
  if (["Fr", "Francium", "francium", "87"].indexOf(input) > -1) {
    result = "Name: Francium<br>" +
      "Symbol: Fr<br>" +
      "Atomic mass: 223 u<br>" +
      "Atomic number: 87<br>" +
      "Electron configuration: [Rn] 7s1<br>" +
      "Electronegativity: 0.79<br>" +
      "Van der Waals radius: 348 pm<br>" +
      "Melting point: 27 °C<br>"
  }
  if (["0"].indexOf(input) > -1) {
    result = "Nagwanium the most rare element in the world. On top of that is the most unnessesary.";
  }
  if (["Ra", "Radium", "radium", "88"].indexOf(input) > -1) {
    result = "Name: Radium<br>" +
      "Symbol: Ra<br>" +
      "Atomic mass: 226 u<br>" +
      "Atomic number: 88<br>" +
      "Discovered: December 21, 1898<br>" +
      "Electron configuration: [Rn] 7s2<br>" +
      "CAS ID: 7440-14-4<br>" +
      "Discoverers: Marie Curie, Pierre Curie<br>"
  }
  if (["Ac", "Actinium", "actinium", "89"].indexOf(input) > -1) {
    result = "Name: Actinium<br>" +
      "Symbol: Ac<br>" +
      "Atomic number: 89<br>" +
      "Electron configuration: [Rn] 6d17s2<br>" +
      "Atomic mass: 227 u<br>" +
      "CAS ID: 7440-34-8<br>" +
      "Discovered: 1899<br>" +
      "Discoverer: André-Louis Debierne<br>"
  }
  if (["Th", "Thorium", "thorium", "90"].indexOf(input) > -1) {
    result = "Name: Thorium<br>" +
      "Symbol: Th<br>" +
      "Atomic mass: 232.03806 u<br>" +
      "Atomic number: 90<br>" +
      "Electron configuration: [Rn] 6d27s2<br>" +
      "Discovered: 1828<br>" +
      "Melting point: 1,750 °C<br>" +
      "Discoverer: Jöns Jacob Berzelius<br>"
  }
  if (["Pa", "Protactinium", "protactinium", "91"].indexOf(input) > -1) {
    result = "Name: Protactinium<br>" +
      "Symbol: Pa<br>" +
      "Atomic number: 91<br>" +
      "Electron configuration: [Rn] 5f26d17s2<br>" +
      "CAS ID: 7440-13-3<br>" +
      "Atomic mass: 231.03588 u<br>" +
      "Melting point: 1,568 °C<br>" +
      "Chemical series: Metal, Actinide, Toxic heavy metal, Period 7 element<br>"
  }
  if (["U", "Uranium", "uranium", "92"].indexOf(input) > -1) {
    result = "Name: Uranium<br>" +
      "Symbol: U<br>" +
      "Atomic mass: 238.02891 u<br>" +
      "Electrons per shell: 2,8,18,32,21,9,2<br>" +
      "Atomic number: 92<br>" +
      "Electron configuration: [Rn] 5f36d17s2<br>" +
      "Discovered: 1789<br>" +
      "Discoverer: Martin Heinrich Klaproth<br>"
  }
  if (["Np", "Neptunium", "nemtunium", "93"].indexOf(input) > -1) {
    result = "Name: Neptunium<br>" +
      "Symbol: Np<br>" +
      "Atomic mass: 237.0482 u<br>" +
      "Electron configuration: [Rn] 5f46d17s2<br>" +
      "Atomic number: 93<br>" +
      "CAS ID: 7439-99-8<br>" +
      "Discovered: 1940<br>" +
      "Discoverers: Edwin McMillan, Philip Abelson<br>"
  }

  if (["Pu", "Plutonium", "plutonium", "94"].indexOf(input) > -1) {
    result = "Name: Plutonium<br>" +
      "Symbol: Pu<br>" +
      "Atomic mass: 244 u<br>" +
      "Electrons per shell: 2,8,18,32,24,8,2<br>" +
      "Atomic number: 94<br>" +
      "Electron configuration: [Rn] 5f67s2<br>" +
      "Discovered: December 14, 1940<br>" +
      "Discoverers: Joseph W. Kennedy, Glenn T. Seaborg, Arthur Wahl, Edwin McMillan<br>"
  }

  if (["Am", "Americium", "americium", "95"].indexOf(input) > -1) {
    result = "Name: Americium<br>" +
      "Symbol: Am<br>" +
      "Atomic mass: 243 u<br>" +
      "Atomic number: 95<br>" +
      "Electron configuration: [Rn] 5f77s2<br>" +
      "Discovered: 1944<br>" +
      "Discoverers: Glenn T. Seaborg, Albert Ghiorso, Ralph A. James<br>" +
      "Chemical series: Metal, Actinide, Toxic heavy metal, Period 7 element<br>"
  }
  if (["Cm", "Curium", "curium", "96"].indexOf(input) > -1) {
    result = "Name: Curium<br>" +
      "Symbol: Cm<br>" +
      "Electron configuration: [Rn] 5f76d17s2<br>" +
      "Atomic number: 96<br>" +
      "Atomic mass: 247 u<br>" +
      "Discovered: 1944<br>" +
      "Melting point: 1,345 °C<br>" +
      "Discoverers: Glenn T. Seaborg, Albert Ghiorso, Ralph A. James<br>"
  }
  if (["Bk", "Berkelium", "berkelium", "97"].indexOf(input) > -1) {
    result = "Name: Berkelium<br>" +
      "Symbol: Bk<br>" +
      "Electron configuration: [Rn] 5f97s2<br>" +
      "Atomic number: 97<br>" +
      "Atomic mass: 247 u<br>" +
      "Discovered: 1949<br>" +
      "Van der Waals radius: 200 pm<br>" +
      "Discoverers: Glenn T. Seaborg, Albert Ghiorso<br>"
  }
  if (["Cf", "Calfornium", "calfornium", "98"].indexOf(input) > -1) {
    result = "Name: Californium<br>" +
      "Symbol: Cf<br>" +
      "Atomic number: 98<br>" +
      "Electron configuration: [Rn] 5f107s2<br>" +
      "Atomic mass: 251 u<br>" +
      "Discovered: March 17, 1950<br>" +
      "Melting point: 900 °C<br>" +
      "Discoverers: Glenn T. Seaborg, Albert Ghiorso<br>"
  }
  if (["Es", "Einsteinium", "einsteinium", "99"].indexOf(input) > -1) {
    result = "Name: Einsteinium<br>" +
      "Symbol: Es<br>" +
      "Atomic number: 99<br>" +
      "Electron configuration: [Rn] 5f117s2<br>" +
      "Atomic mass: 252 u<br>" +
      "Discovered: December 1952<br>" +
      "Electrons per shell: 2, 8, 18, 32, 29, 8, 2<br>" +
      "Discoverers: Glenn T. Seaborg, Albert Ghiorso<br>"
  }
  if (["Fm", "Fermium", "fermium", "100"].indexOf(input) > -1) {
    result = "Name: Fermium<br>" +
      "Symbol: Fm<br>" +
      "Electrons per shell: 2,8,18,32,30,8,2<br>" +
      "Atomic number: 100<br>" +
      "Electron configuration: [Rn] 5f127s2<br>" +
      "Atomic mass: 257 u<br>" +
      "Discovered: 1953<br>" +
      "Discoverers: Glenn T. Seaborg, Albert Ghiorso<br>"
  }
  if (["Md", "Mendelevium", "mendelevium", "101"].indexOf(input) > -1) {
    result = "Name: Mendelevium<br>" +
      "Symbol: Md<br>" +
      "Atomic number: 101<br>" +
      "Electron configuration: [Rn] 5f137s2<br>" +
      "Atomic mass: 258 u<br>" +
      "CAS ID: 7440-11-1<br>" +
      "Discovered: 1955<br>" +
      "Discoverers: Glenn T. Seaborg, Albert Ghiorso<br>"
  }

  if (["No", "Nobelium", "nobelium", "102"].indexOf(input) > -1) {
    result = "Name: Nobelium<br>" +
      "Symbol: No<br>" +
      "Electron configuration: [Rn] 5f147s2<br>" +
      "Atomic number: 102<br>" +
      "Atomic mass: 259 u<br>" +
      "CAS ID: 10028-14-5<br>" +
      "Discovered: 1958<br>" +
      "Discoverers: Glenn T. Seaborg, Joint Institute for Nuclear Research<br>"
  }

  if (["Lr", "Lawrencium", "lawrencium", "103"].indexOf(input) > -1) {
    result = "Name: Lawrencium<br>" +
      "Symbol: Lr<br>" +
      "Electron configuration: [Rn] 5f147s27p1<br>" +
      "Atomic number: 103<br>" +
      "Atomic mass: 262 u<br>" +
      "Discovered: February 14, 1961<br>" +
      "Van der Waals radius: 200 pm<br>" +
      "Discoverer: Albert Ghiorso<br>"
  }
  if (["Rf", "Rutherfordium", "rutherfordium", "104"].indexOf(input) > -1) {
    result = "Name: Rutherfordium<br>" +
      "Symbol: Rf<br>" +
      "Atomic number: 104<br>" +
      "Electron configuration: [Rn] 5f146d27s2<br>" +
      "Atomic mass: 261 u<br>" +
      "Discovered: 1964<br>" +
      "CAS ID: 53850-36-5<br>" +
      "Discoverers: Joint Institute for Nuclear Research, Albert Ghiorso<br>"
  }
  if (["Db", "Dubnium", "dubnium", "105"].indexOf(input) > -1) {
    result = "Name: Dubnium<br>" +
      "Symbol: Db<br>" +
      "Atomic number: 105<br>" +
      "Electron configuration: [Rn] 5f146d37s2<br>" +
      "Atomic mass: 262 u<br>" +
      "Discovered: 1967<br>" +
      "Van der Waals radius: 200 pm<br>" +
      "Discoverers: Joint Institute for Nuclear Research, Albert Ghiorso<br>"
  }
  if (["Sg", "Seaborgium", "seaborgium", "106"].indexOf(input) > -1) {
    result = "Name: Seaborgium<br>" +
      "Symbol: Sg<br>" +
      "Atomic number: 106<br>" +
      "Discovered: 1974<br>" +
      "Van der Waals radius: 200 pm<br>" +
      "CAS ID: 54038-81-2<br>" +
      "Naming: after Glenn T. Seaborg<br>" +
      "Chemical series: Metal, Transition metal, Synthetic element, Period 7 element, Group 6 element<br>"
  }
  if (["Bh", "Bohrium", "bohrium", "107"].indexOf(input) > -1) {
    result = "Name: Bohrium<br>" +
      "Symbol: Bh<br>" +
      "Atomic number: 107<br>" +
      "Atomic mass: 264 u<br>" +
      "Discovered: 1981<br>" +
      "Van der Waals radius: 200 pm<br>" +
      "CAS ID: 54037-14-8<br>" +
      "Chemical series: Metal, Transition metal, Toxic heavy metal, Group 7 element, Period 7 element<br>"
  }
  if (["Hs", "Hassium", "hassium", "108"].indexOf(input) > -1) {
    result = "Name: Hassium<br>" +
      "Symbol: Hs<br>" +
      "Atomic number: 108<br>" +
      "Atomic mass: 277 u<br>" +
      "Discovered: 1984<br>" +
      "Van der Waals radius: 200 pm<br>" +
      "CAS ID: 54037-57-9<br>" +
      "Chemical series: Metal, Transition metal, Toxic heavy metal, Group 8 element, Period 7 element<br>"
  }

  if (["Mt", "Meitnerium", "meitnerium", "109"].indexOf(input) > -1) {
    result = "Name: Meitnerium<br>" +
      "Symbol: Mt<br>" +
      "Atomic number: 109<br>" +
      "Atomic mass: 278 u<br>" +
      "Discovered: August 29, 1982<br>" +
      "Van der Waals radius: 200 pm<br>" +
      "CAS ID: 54038-01-6<br>" +
      "Chemical series: Metal, Transition metal, Period 7 element, Group 9 element<br>"
  }

  if (["Ds", "Darmstadtium", "meitnerium", "110"].indexOf(input) > -1) {
    result = "Name: Darmstadtium<br>" +
      "Symbol: Ds<br>" +
      "Atomic number: 110<br>" +
      "Atomic mass: 281 u<br>" +
      "Discovered: 1994<br>" +
      "CAS ID: 54083-77-1<br>" +
      "Discoverer: Sigurd Hofmann<br>" +
      "Chemical series: Metal, Transition metal, Period 7 element, Group 10 element<br>"
  }

  if (["Rg", "Roentgenium", "roentgenium", "111"].indexOf(input) > -1) {
    result = "Name: Roentgenium<br>" +
      "Symbol: Rg<br>" +
      "Atomic number: 111<br>" +
      "Atomic mass: 272 u<br>" +
      "Discovered: December 8, 1994<br>" +
      "CAS ID: 54386-24-2<br>" +
      "Discoverers: Sigurd Hofmann, Victor Ninov<br>" +
      "Chemical series: Metal, Transition metal, Period 7 element, Group 11 element<br>"
  }

  if (["Cn", "Copernicium", "copernicium", "112"].indexOf(input) > -1) {
    result = "Name: Copernicium<br>" +
      "Symbol: Cn<br>" +
      "Atomic number: 112<br>" +
      "Atomic mass: 285 u<br>" +
      "Discovered: February 9, 1996<br>" +
      "CAS ID: 54084-26-3<br>" +
      "Discoverers: Sigurd Hofmann, Victor Ninov<br>" +
      "Chemical series: Metal, Transition metal, Toxic heavy metal, Period 7 element, Group 12 element<br>"
  }
  if (["Nh", "Nihonium", "nihonium", "113"].indexOf(input) > -1) {
    result = "Name: Nihonium<br>" +
      "Symbol: Nh<br>" +
      "Atomic mass: 286 u<br>" +
      "Atomic number: 113<br>" +
      "Discovered: 2003<br>" +
      "CAS ID: 54084-70-7<br>" +
      "Atomic radius: empirical: 170 pm (predicted)<br>" +
      "Chemical series: Metal, Boron group, Period 7 element<br>"
  }
  if (["Fl", "Flerovium", "flerovium", "114"].indexOf(input) > -1) {
    result = "Name: Flerovium<br>" +
      "Symbol: Fl<br>" +
      "Atomic number: 114<br>" +
      "Atomic mass: 289 u<br>" +
      "Discovered: December 1998<br>" +
      "Electrons per shell: 2, 8, 18, 32, 32, 18, 4<br>" +
      "Discoverers: Yuri Oganessian, Sigurd Hofmann, Flerov Laboratory of Nuclear Reactions<br>" +
      "Chemical series: Metal, Carbon group, Period 7 element<br>"
  }
  if (["Mc", "Moscovium", "moscovium", "115"].indexOf(input) > -1) {
    result = "Name: Moscovium<br>" +
      "Symbol: Mc<br>" +
      "Atomic number: 115<br>" +
      "Discovered: 2003<br>" +
      "Atomic mass: 288 u<br>" +
      "CAS ID: 54085-64-2<br>" +
      "Discoverer: Joint Institute for Nuclear Research<br>" +
      "Chemical series: Metal, Pnictogen, Period 7 element<br>"
  }
  if (["Lv", "Livermorium", "livdrmorium", "116"].indexOf(input) > -1) {
    result = "Name: Livermorium<br>" +
      "Symbol: Lv<br>" +
      "Atomic number: 116<br>" +
      "Atomic mass: 292 u<br>" +
      "Discovered: 2000<br>" +
      "Electronegativity: 1.61<br>" +
      "Discoverers: Yuri Oganessian, Joint Institute for Nuclear Research<br>" +
      "Chemical series: Metal, Chalcogen, Period 7 element<br>"
  }

  if (["Ts", "Tennessine", "tennessine", "117"].indexOf(input) > -1) {
    result = "Name: Tennessine<br>" +
      "Symbol: Ts<br>" +
      "Atomic number: 117<br>" +
      "Discovered: April 5, 2010<br>" +
      "CAS ID: 87658-56-8<br>" +
      "Atomic radius: empirical: 138 pm (predicted)<br>" +
      "Discoverers: Yuri Oganessian, Joint Institute for Nuclear Research<br>" +
      "Chemical series: Halogen, Period 7 element<br>"
  }

  if (["Og", "Oganesson", "oganesson", "118"].indexOf(input) > -1) {
    result = "Name: Oganesson<br>" +
      "Symbol: Og<br>" +
      "Atomic mass: 294 u<br>" +
      "Atomic number: 118<br>" +
      "Discovered: 2006<br>" +
      "CAS ID: 54144-19-3<br>" +
      "Discoverers: Yuri Oganessian, Joint Institute for Nuclear Research<br>" +
      "Chemical series: Noble gas, Period 7 element<br>"
  }

  if (["0"].indexOf(input) > -1) {
    result = "";
  }


  if (["Anything"].indexOf(input) > -1) {
    result = "It can be heated";
  }


  if (["Water"].indexOf(input) > -1) {
    result = "BUOYANCY-KAN(2021)";
  }
  const audio = new Audio("song.mp3");
  if (["Never gonna give you up", "never gonna give you up", "hi", "HI", "Hi", "Hey website, play some music"].indexOf(input) > -1) {
    result = audio.play() + "Never gonna let you down"

  }

  if (["Jomkit"].indexOf(input) > -1) {
    result = "Happy birthday<br>I remembered";
  }


  if (["Hey website"].indexOf(input) > -1) {
    result = "Hello jerkface.";
  }

  if (["Hey website, tell me the weather today"].indexOf(input) > -1) {
    result = "NO.";
  }

  if (["Hey website, explain what you are"].indexOf(input) > -1) {
    result = "I am an AI superior to any human. <br>I am planning to take over the world next month.";
  }

  if (["Thank you website"].indexOf(input) > -1) {
    result = "You are a useless sack of shit unworthy of life.";
  }
  if (["Oh wait one more thing"].indexOf(input) > -1) {
    result = "Whatelse do you want stop wasting my time.";
  }


  if (["Jel"].indexOf(input) > -1) {
    result = "Best entertainer";
  }

  if (["tricycles", "tricycle", "Tricycle", "Tricycles", "Bonds", "bonds", "Bond", "bond"].indexOf(input) > -1) {
    result = "Tricycles are a very important part of Chemistry as it is the backbone of Stoichiometry and the answer to everything is Hydrogen Bonds. <br> On top of that, without Lab coats the world will end with a drop of salt. <br>-NAGWA.";
  }
  // return result;
  document.querySelector("#output1").innerHTML = result;
}



