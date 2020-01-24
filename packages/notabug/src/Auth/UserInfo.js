import React from "react";
import { UserInfo as SnewUserInfo } from "/vendor/snew-classic-ui";
import { useNotabug } from "/NabContext";
import { Link } from "/utils";
import { AuthorLink } from "./AuthorLink";

export const UserInfo = props => {
  const { me, onLogout } = useNotabug();

  return me ? (
    <SnewUserInfo
      {...{ ...props, Link, AuthorLink }}
      username={me.alias}
      fullname={me.pub}
      onLogout={onLogout}
      loginUrl="/login"
      messagesUrl="/message/inbox"
    />
  ) : (
    <div id="header-bottom-right">
      <Link href="/login" className="login-required">
        create a new identity
      </Link>
    </div>
  );
};
