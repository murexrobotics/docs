# Welcome!

Welcome to MUREX Robotics Programming. We are a subgroup focused on optimization, and creativity. TODO

## Explanations

MUREX Robotics Programming involves very specialized programming that may not always have solutions online. Below explains the basis of the work we do. ***It is not required that you understand the material, this is for you to learn. We do not expect you to know anything when you first join.***

## Required Software

- [Rust](https://www.rust-lang.org/tools/install)
- Python (Version requirement TODO)
- Text Editor
  - Suggested: Visual Studio Code, Sublime Text, etc.
- Git/GitHub

## Design Process

TODO

## Common Terms

- Python: a dynamically typed programming language that is very beginner-friendly and has many useful packages and libraries.
  - [Python Documentation](https://www.python.org/doc/)
- Rust: a statically typed programming language with helpful error messages that prevent unexpected crashes.
  - [The Rust Book](https://doc.rust-lang.org/book/ch01-00-getting-started.html)
- Embedded: TODO
  - [The Embedded Rust Book](https://docs.rust-embedded.org/book/)
- FFmpeg: a multimedia converter (converts video and/or audio from one file type to another). In MUREX, we use it to send the camera livestream from the Raspberry Pi and play it on the topside computer.
- Ethernet: a family of wired computer networking technologies commonly used in local area networks (LAN), metropolitan area networks (MAN) and wide area networks (WAN). In MUREX, we use it as an intranet between the Raspberry Pi and topside. This requires some knowledge of network management.
  - [Network Chuck Explains IP Addresses](https://www.youtube.com/watch?v=5WfiTHiU4x8)
  - This is a pretty big topic. It's better explained through demos.
- TCP (Transmission Control Protocol): a connection-oriented data transfer protocol that is used when the connection must be trustworthy. It implements handshaking techniques that acknowledge when data has been received to increase reliability.
- UDP (User Datagram Protocol): a connectionless data transfer protocol that faster but less reliable than TCP. May drop data packets in the case of an error. It does not use handshaking techniques.
MORE TODOs

How do you get started with programming? A great way is by doing projects such as game bots in the language you want to learn.

## Robotics-Specific Terms

- I2C: a synchronous, multi-master/multi-slave (controller/target), packet switched, single-ended, serial communication bus. It is widely used for attaching lower-speed peripheral ICs to processors and microcontrollers in short-distance, intra-board communication. Almost all sensors use I2C to communicate
  - [nandland Explains I2C](https://www.youtube.com/watch?v=jFtr0Ha5f-c&t)
  - [Great Scott Explains I2C](https://www.youtube.com/watch?v=_fgWQ3TIhyE)
- UART: [best explained by wikipedia](https://en.wikipedia.org/wiki/Universal_asynchronous_receiver-transmitter)
  - [Great Scott Explains UART](https://www.youtube.com/watch?v=yFQS_TQ4948)
- Telemetry: the process of recording and transmitting the readings of an instrument such as a sensor. MUREX uses many sensors for measurements such as humidity, depth, gas levels, current, etc.
MORE TODOs

## MUREX-specific Terms

- Altan: the magic word to yell when the code does not work as expected. Duration only lasts for the 23-24 and 24-25 season.
- Throwing: when somebody makes an accidental mistake that results in unwanted circumstances.
- MORE TODOs

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
    TODO

... is a lot better than

Feat: <insert project name> done
```

Commit standards apply to all commits on Git to the MUREX organization. Since we're a pretty small team, we don't implement any PR system or much CI/CD for those who come from a software development background, but a good commit history is important.

## Attempt the Impossible

Going to back our "mission statement"... (it's not really a mission statement, more a motivational quote)

> *Attempt the impossible*

What does this mean? Now that you have read through what MUREX Robotics Programming (or *prog*) is all about and equipped with technical expertise, we can finally say what the true meaning is.

***Attempt the impossible***: We do it the best way possible. If pre-written code online isn't fast or robust enough, we don't use it. TODO

## Summary

TODO

*Always attempting the impossible,*\
Members:

- Altan Unver '25
- Ethan Cheng '24
- Celine Zhang '26

Emeriti:

- Kevin Wei '23
