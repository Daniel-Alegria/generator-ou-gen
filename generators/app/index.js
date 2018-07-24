'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the funkadelic ${chalk.red('generator-ou-gen')} generator!`)
    );

    const prompts = [
      // Company Information
      {
        type: 'input',
        name: 'company',
        message: 'Company name:',
        default: 'Lorem Ipsum'
      },
      // Body
      {
        type: 'input',
        name: 'title',
        message: 'Body Title:',
        default: 'Online University'
      },
      {
        type: 'input',
        name: 'subtitle',
        message: 'Body Subtitle:',
        default: 'Safety Training'
      },
      {
        type: 'input',
        name: 'safetyMessage',
        message: 'Safety Message:',
        default:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
      // Help
      // Styles
      // {
      //   type: 'input',
      //   name: 'primaryColor',
      //   message: 'Primary Color:',
      //   default: '#0A5F84'
      // },
      // {
      //   type: 'input',
      //   name: 'secondaryColor',
      //   message: 'Secondary Color:',
      //   default: '#485E87'
      // },
      // {
      //   type: 'input',
      //   name: 'font',
      //   message: 'Font Family:',
      //   default: 'Arial'
      // },
      // Support
      // {
      //   type: 'input',
      //   name: 'supportContact',
      //   message: 'Support Contact',
      //   default: 'John Smith'
      // },
      // {
      //   type: 'input',
      //   name: 'supportEmail',
      //   message: 'Support Email:',
      //   default: 'john@smith.com'
      // },
      // {
      //   type: 'input',
      //   name: 'supportPhone',
      //   message: 'Support Phone:',
      //   default: '1.555.555.5555'
      // }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('Body.asp'),
      this.destinationPath(this.props.company + 'Body.asp'),
      {
        company: this.props.company,
        title: this.props.title,
        subTitle: this.props.subTitle,
        safetyMessage: this.props.safetyMessage
      }
    );
    // -this.fs.copyTpl(
    //   this.templatePath('Styles.asp'),
    //   this.destinationPath(this.props.company + 'Styles.asp'),
    //   {
    //     primaryColor: this.props.primaryColor,
    //     secondaryColor: this.props.secondaryColor,
    //     font: this.props.font
    //   }
    // );
    // this.fs.copyTpl(
    //   this.templatePath('Support.asp'),
    //   this.destinationPath(this.props.company + 'Support.asp'),
    //   {
    //     company: this.props.company,
    //     supportContact: this.props.supportContact,
    //     supportEmail: this.props.supportEmail,
    //     supportPhone: this.props.supportPhone
    //   }
    // );
  }

  install() {
    this.installDependencies();
  }
};
