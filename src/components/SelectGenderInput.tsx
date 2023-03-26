import React, { Component, createRef } from 'react';

interface SelectGenderInputProps {
  updateGender: (selectedGender: string) => void;
  selectGenderRef: React.RefObject<HTMLInputElement>;
  selectMaleRef: React.RefObject<HTMLInputElement>;
  selectFemaleRef: React.RefObject<HTMLInputElement>;
}

interface SelectGenderInputState {
  selectedGender: string;
}

class SelectGenderInput extends Component<SelectGenderInputProps, SelectGenderInputState> {
  selectMale = createRef<HTMLInputElement>();
  selectFemale = createRef<HTMLInputElement>();
  selectedGender = createRef<HTMLInputElement>();

  constructor(props: SelectGenderInputProps) {
    super(props);
    this.state = {
      selectedGender: '',
    };
  }

  handleOptionChange = () => {
    if (this.selectMale.current?.checked) {
      this.setState({ selectedGender: 'male' });
      this.props.updateGender('male');
      if (this.props.selectGenderRef.current) {
        this.props.selectGenderRef.current.checked = true;
      }
    } else if (this.selectFemale.current?.checked) {
      this.setState({ selectedGender: 'female' });
      this.props.updateGender('female');
      if (this.props.selectGenderRef.current) {
        this.props.selectGenderRef.current.checked = false;
      }
    }
  };

  render() {
    return (
      <form>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => event.target.value}
          ref={this.selectMale}
        />
        <label htmlFor="male">Male</label>
        <br />
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => event.target.value}
          ref={this.selectFemale}
        />
        <label htmlFor="female">Female</label>
        <br />
        {/* <input type="hidden" name="gender" ref={this.selectedGender} /> */}
      </form>
    );
  }
}

export default SelectGenderInput;

// import React, { Component, createRef } from 'react';

// type SelectGenderInputState = {
//   selectGender: string;
//   selectMale: React.RefObject<HTMLInputElement>;
//   selectFemale: React.RefObject<HTMLInputElement>;
// };

// interface SelectGenderInputProps {
//   updateGender: (selectedGender: string) => void;
// }

// class SelectGenderInput extends Component<SelectGenderInputProps, SelectGenderInputState> {
//   selectMale: React.RefObject<HTMLInputElement>;
//   selectFemale: React.RefObject<HTMLInputElement>;
//   constructor(props: SelectGenderInputProps) {
//     super(props);
//     this.state = {
//       selectGender: '',
//       selectMale: (this.selectMale = createRef()),
//       selectFemale: (this.selectFemale = createRef()),
//     };
//   }

//   handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedGender = event.target.value;
//     this.setState({ selectGender: selectedGender });
//     this.props.updateGender(selectedGender);
//   };
//   handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (this.state.selectGender === '') {
//       console.log('Please select an option');
//       return;
//     }
//   };
//   render() {
//     console.log(this.state.selectGender);
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="radio"
//           name="gender"
//           value="male"
//           onChange={this.handleOptionChange}
//           ref={this.selectMale}
//         />
//         <label htmlFor="male">Male</label>
//         <br />
//         <input
//           type="radio"
//           name="gender"
//           value="female"
//           onChange={this.handleOptionChange}
//           ref={this.selectFemale}
//         />
//         <label htmlFor="female">Female</label>
//         <br />
//         <input type="submit" value="submit" />
//       </form>
//     );
//   }
// }

// export default SelectGenderInput;
