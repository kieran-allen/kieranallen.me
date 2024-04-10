export function Ledger() {
  return (
    <section>
      <header>
        <h3>
          Senior Frontend Developer -{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.ledger.com/"
          >
            Ledger
          </a>
        </h3>
        <h4>May 2023 - Present</h4>
      </header>
      <ul>
        <li>
          As part of a team developing live apps that interact with the Ledger
          Live Hub, I play a key role in building and enhancing the user
          experience for Ledger&apos;s crypto hardware wallet customers.
        </li>
        <li>
          Developed a create-live-app repository that can be used by other
          Ledger teams or external parties to bootstrap their own live app. This
          repository includes documentation and best practices, enabling faster
          and more efficient development of new live apps while maintaining
          consistency and quality across the ecosystem.
        </li>
        <li>
          Took ownership of managing the firefighting process within the
          frontend team. This involved documenting best practices, establishing
          processes for identifying and addressing critical issues, and
          coordinating with team members to ensure timely resolution of
          problems. By streamlining the firefighting process, I have contributed
          to improved stability and reliability of the frontend applications.
        </li>
        <li>
          My team and I are currently working on a new version of the swap
          feature, with the goal of simplifying the integration of future
          partners and accelerating the rate at which the swap team can release
          frontend features and fixes. This initiative aims to improve the
          overall user experience and provide a more seamless and efficient
          process for customers.
        </li>
        <li>
          I contribute to the development and implementation of best practices,
          ensuring that the frontend codebase is maintainable, scalable, and
          adheres to industry standards. This helps to facilitate collaboration
          among team members and enables the efficient delivery of high-quality
          features and bug fixes.
        </li>
        <li>
          Developed a testing tool that leveraged{" "}
          <a
            href="https://book.getfoundry.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Foundry{" "}
          </a>{" "}
          and{" "}
          <a
            href="https://book.getfoundry.sh/anvil/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anvil{" "}
          </a>{" "}
          to enable fork testing within the Ledger Live app. This tool allowed
          developers to mock ETH and ERC20 balances and transactions,
          eliminating the need to request funds manually and significantly
          speeding up development time.
        </li>
      </ul>
    </section>
  );
}
