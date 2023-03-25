import React, { Component, createRef, RefObject } from 'react';

interface SwitcherProps {
  selectGender: RefObject<HTMLInputElement>;
}

type SwitcherState = {
  selectedGender: string;
};

class Switcher extends Component<SwitcherProps, SwitcherState> {
  selectGender: React.RefObject<HTMLInputElement>;

  constructor(props: SwitcherProps) {
    super(props);

    this.state = {
      selectedGender: '',
    };
    this.selectGender = createRef();
  }

  handleGenderSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const gender = event.target.value;
    this.setState({ selectedGender: gender });
  };

  render() {
    console.log(this.state.selectedGender);
    return (
      <>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.selectedGender === 'male'}
            onChange={this.handleGenderSelect}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.selectedGender === 'female'}
            onChange={this.handleGenderSelect}
          />
          Female
        </label>
      </>
    );
  }
}

export default Switcher;
