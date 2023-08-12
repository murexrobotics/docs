# Welcome!

Welcome to MUREX Robotics Programming. We are a subgroup focused producing efficient and robust. 

## Introduction

> *“An idiot admires complexity, a genius admires simplicity.”*
― Terry Davis, Creator of Temple OS

MUREX Programming is hard. We write code in various languages, that run on a veriety of platforms that have access to various types of tooling. We have to make sure that all of these components work together in a way that is efficient and robust. It is easy to get lost in the complexity of the system, but we must always strive to keep things simple. It is impossible to write perfect code, but we must always strive to write good code. No one member of the team is expected to know everything, but we must always strive to learn more.

## Required Software

- [Rust](https://www.rust-lang.org/tools/install)
- [Python 3.11.*](https://www.python.org/downloads/release/python-3110/)
- [VS Code](https://code.visualstudio.com/download)
  - We strongly encourage the use of VS Code due to the large plugin ecosystem and the ability to use it on any platform. You are free to use whatever IDE you would like, however support for setting up development tools will be limited..
- [Git](https://git-scm.com/downloads)
- MacOs or Linux
  - Once again, we strongly encourage the use of either MacOs or Linux, specifically for our embedded and aquatic subgroups. You are free to use whatever OS you would like, however many of the tools we use are either not supported on Windows or are more difficult to set up on Windows.

## Design Process

The design process for MUREX Robotics Programming is as follows:

1. Identify the desired functionality, and write a design document. 
3. Identify target platform this feature will run on.
4. Identify the programming language(s) that will be used to implement this feature and the tooling that will be used to build and test this feature.
5. Create a GitHub issue for the desired feature.
  - The issue should go over the purpose of the feature and it's role in the system.
  - The issue should be assigned to exactly 2 people: 
    - the person who will be implementing the feature.
    - the person who will be reviewing the implementation.
  - The issue should have a list of sub-tasks written in MarkDown.
6. Create a branch for the feature.
7. Write tests for the feature, each test should be minimally functionally and dependent on as few components as possible.
  - Unit tests should be written for all code that is not hardware dependent.
  - Integration tests should be written for all code.
8. Write the code for the feature.
9. Test the feature.
10. Abuse your implementation. Try to break it. Try to make the program crash by any means necessary. If you can't break it, it's probably good. We do NOT want the code to crash during the competition.
10. Request a code review from the other person assigned on the task.
11. Repeat steps 8-10 until the feature is complete, code is cleanly and efficiently.
12. Document the feature.
  - Write code for the official MUREX Documentation. Should include:
    - Description of the feature.
    - How to use the feature.
    - How to test the feature.
    - How to debug the feature.
    - The relevant API signatures for the code written to implement the feature (In the MUREX API Reference).
  - Write local documentation for the code. Should include:
    - Basic doc strings for all functions and classes/ structs.
    - Comments for all non-obvious code.
  - Write the addition of the feature to the Changelog.
13. Complete a merge request from the other memeber assigned to the task, this will include a final code review.

We follow this process to ensure that all code is well documented, well tested, and well designed. This process is not perfect, and we are always looking for ways to improve it. If you have any suggestions, please let us know. To learn more about our design process, please read our [contribution guide](./contribute.md).

Every member of the team is treated equally and can request a feature to be implemented. However, the priority of electrical requests will typically be ranked higher then any other subgroup. There is also a special exception for programming members, if you suggest a feature you are responsible for the implementation of the feature. You can work on as many features as you would like, but you are responsible for the implementation of all of them. Failure to do so repeatedly will result in a loss of privileges, eg. you will be demoted to working on less interesting features.

## Communciation

It is essential that communication within a team is streamline, otherwise the effectiveness and efficiency dropps dramatically. Programming as an individual is starckly different from programming as a team. Many new members are not used to programming as a team, our design process and style guides ensure that this process is as seamless as possible. Find out more from out [contribution guide](./contribute.md).

### Work Planning

We use Discord as the primary mode of communication. Programming has a dedicated set of channels intended for the discussion of programming tasks, approaches and meeting times. Every member has equal say in these discussions. All of the tasks to be completed for the competition that have passed the feature request process are listed as Github Issues on the [`murex-2024`](https://github.com/murexrobotics/murex-2024) repository. Each feature will be labeled to identify information about it's urgency, difficulty, target platform and programming language. If you notice that nobody is working on a feature you can request to be assigned to it. If you are assigned to a feature you are responsible for the implementation of the feature. 

### Transparency

In such a fast paced environment, it is unusual not to feel stressed/ over-worked. We try to mitigate this by being as transparent as possible. Being assigned to a feature and not completing is different from being assigned, working on it and failing. If you are struggling or need a break, everyone on the team will understand. We promote transparency among the team so that we have a healthy team dynamic. We will spend a lot of time together, frustrated and tired. We need to be able to trust each other and be able to rely on each other. If you are struggling, please let us know. We will do our best to help.

## Common Terms

### General Knowledege

- Python: A dynamically typed programming language that is very beginner-friendly and has an enormous package ecosystem suited to built almost anything.
  - [Python Documentation](https://www.python.org/doc/)
- Rust: The only programming language that is both safe, fast and easy to use. It is statically typed and has a very powerful type system. It is a great language for embedded systems and is used in many large projects such as Firefox, Dropbox, and Discord. We use it for all of our embedded systems. It has a high-learning curve but has excelent documentation and a very helpful community. Once rust code works, you will have a hard time trying to break it.
- [The Book](https://doc.rust-lang.org/book/ch01-00-getting-started.html): The official Rust book. It is a great resource for learning Rust.
- Embedded: A software that runs without an operating system or in a reasource constrained environment.
- [The Embedded Book](https://docs.rust-embedded.org/book/): The official Rust Embedded book. It is a great resource for learning Rust for embedded systems.
- FFmpeg: a multimedia converter (converts video and/or audio from one file type to another). In MUREX, we use it to send the camera livestream from the Raspberry Pi and play it on the topside computer.
- Ethernet: a family of wired computer networking technologies commonly used in local area networks (LAN), metropolitan area networks (MAN) and wide area networks (WAN). In MUREX, we use it as an intranet between the Raspberry Pi and topside. This requires some knowledge of network management.
  - [Network Chuck Explains IP Addresses](https://www.youtube.com/watch?v=5WfiTHiU4x8)
  - This is a pretty big topic. It's better explained through demos.
- TCP (Transmission Control Protocol): a connection-oriented data transfer protocol that is used when the connection must be trustworthy. It implements handshaking techniques that acknowledge when data has been received to increase reliability.
- UDP (User Datagram Protocol): a connectionless data transfer protocol that faster but less reliable than TCP. May drop data packets in the case of an error. It does not use handshaking techniques.
- SSH: A secure shell protocol that allows you to remotely access a computer. In MUREX, we use it to remotely access the Raspberry Pi.
- [Git](https://git-scm.com/): a distributed version control system. It is used to track changes in source code during software development. In MUREX, we use it to track changes in our code and to collaborate on code.
  - [Git Documentation](https://git-scm.com/doc)
  - [Git Tutorial](https://www.youtube.com/watch?v=USjZcfj8yxE)
- [Tailscale](https://tailscale.com/): a VPN (Virtual Private Network) that allows you to access a computer remotely for easy, secure remote testing.
- [OpenOCD](http://openocd.org/): an open-source software that allows you to debug embedded systems.
- [GDB](https://www.gnu.org/software/gdb/): a debugger that allows you to debug embedded systems.
- [PicoProbe](https://github.com/raspberrypi/picoprobe): A debug prope you can setup on the Raspberry Pi Pico to debug flash and debug another pico.
- [Target Triple](https://doc.rust-lang.org/reference/linkage.html#target-triple): a string that describes the target architecture of a binary. It is used to cross-compile Rust code for embedded systems.
  - armv7-unknown-linux-gnueabihf: the target triple for the Compute Module 4
  - thumbv6m-none-eabi: the target triple for the RP2040
- [Cross-Compilation](https://en.wikipedia.org/wiki/Cross_compiler): the process of compiling code for a platform other than the one you are compiling on.
- [LLVM](https://llvm.org/): A compiler infrastructure that is used to compile Rust code.
- [LLDB](https://lldb.llvm.org/): A debugger that is used to debug Rust code.
- [Cargo](https://doc.rust-lang.org/cargo/): Rust's package manager and build system. It is used to build, run and test Rust code.
- Cargo Workspace: a Cargo project that contains multiple packages. It is used to manage multiple packages in a single repository.
- [Rust Analyzer](https://rust-analyzer.github.io/): a language server that provides IDE-like features such as code completion, diagnostics, jump to definition, etc. It is used to provide IDE-like features in VSCode.
- UF2: A file format that is used to flash the RP2040. Can be made from an ELF binary.
- ELF: A file format that is used to store compiled code.
- RP2040: A powerfull micocrontroller, designed by the Raspberry Pi Foundation, that is used in the Raspberry Pi Pico. We use it to simplify and standardize communication between our electrical/ embedded systems.

### Robotics-Specific Terms

- I2C: a synchronous, multi-master/multi-slave (controller/target), packet switched, single-ended, serial communication bus. It is widely used for attaching lower-speed peripheral ICs to processors and microcontrollers in short-distance, intra-board communication. Almost all sensors use I2C to communicate
  - [nandland Explains I2C](https://www.youtube.com/watch?v=jFtr0Ha5f-c&t)
  - [Great Scott Explains I2C](https://www.youtube.com/watch?v=_fgWQ3TIhyE)
- I2C Driver: A piece of software designed to abstract the raw register manipulation of the I2C protocol into a more usable API. It is used to communicate with I2C devices.
- UART: [best explained by wikipedia](https://en.wikipedia.org/wiki/Universal_asynchronous_receiver-transmitter)
  - [Great Scott Explains UART](https://www.youtube.com/watch?v=yFQS_TQ4948)
- Telemetry: the process of recording and transmitting the readings of an instrument such as a sensor. MUREX uses many sensors for measurements such as humidity, depth, gas levels, current, etc.

### MUREX-specific Terms

- Altan: the magic word to yell when the code does not work as expected. Duration only lasts for the 23-24 and 24-25 season.
- Throwing: when somebody makes an accidental mistake that results in unwanted circumstances.
- MASCP: MUREX Async Serial Communication Protocol. It is a one to many, bi-directional communication protocal built ontop of I2C. It is used to communicate between the Raspberry Pi and the ESCs and between the ESC's themselves.

## Writing Docs

It is expected of every MUREX Robotics Programming member to write documentation in a timely manner. The "docs" are hosted on mdBook, which is written in Markdown and deployed to GitHub Pages through GitHub Actions.

- When adding docs, it should outline any work you have done, and any specialized knowledge required. Pictures are good.
- In writing any docs, if there is precedent, follow it.
- If there is not, find precedent online and follow that.
- All prose must be at least semi-formal and clearly written, with the assumption that the reader has intermediate programming knowledge.
- Markdown must follow regular linting.

## Git Commits

Once you've done some work, either in writing documentation or programming, how do you commit it? Good question. To make sure everyone's on the same page, we follow a [commit standard](../../standards.md). Commits are incredibly important – think of them as chapters in a book. They track changes over time, meaning incremental updates are much better than a big one. For example:

```txt
  feat(murex-util): Implemented MASCP serialization proc-macro
  fix(exp-aquatic): Removed virus copied from stackoverflow on line 25
  feat(pca): Finalized testing suite for PCA9685
  chore(drivers): Moved driver code to separate folder

... is a lot better than

  Finished everythhing
  Fixed a bug
```

Commit standards apply to all commits on Git to the MUREX organization. If you're working on a personal project, you can do whatever you want.

## Attempt the Impossible

Going back to our "mission statement"... (it's not really a mission statement, more a motivational quote)

> *Attempt the impossible*

What does this mean? Now that you have read through what MUREX Robotics Programming (or *prog*) is all about and equipped with technical expertise, we can finally say what the true meaning is.

***Attempt the impossible***: We do it the best way possible. It doesn't matter if it's never been done before, if it is easy then it is not worth doing. We do it because it is hard, because it is impossible. We do it because we are MUREX. When you finish your first task you will feel the gratification of pouring your blood, sweat and tears (Disclaimer: DO NOT actually pour your blood, sweat or tears into anything, that is disgusting, this is strictly metaphorical) into something you can be proud of.

## Summary

*Always attempting the impossible,*\
Members:

- Altan Unver '25
- Ethan Cheng '24
- Celine Zhang '26
- Byran Huang '25
- Max Liu '26

Emeriti:

- Chaney '23
- Kevin Wei '23
