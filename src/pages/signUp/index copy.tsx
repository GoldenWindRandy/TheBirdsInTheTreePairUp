import React, { Component, ChangeEvent, FormEvent } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom';
import classnames from "classnames"

interface State {
    username: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    errors: Record<string, string>;
}

interface Props extends RouteComponentProps {
    flashActions: {
        addFlashMessage: (message: { id: string; msg: string; type: string }) => void;
    };
}

class SignUpForm extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            errors: {}
        }
    }

    onSubmit = (e: FormEvent) => {
        e.preventDefault();
        // 这里是你的 api.register 代码
    }

    changeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [e.target.name]: e.target.value
        } as Pick<State, keyof State>)
    }

    onBlurCheckUserName = () => {
        // 这里是你的 api.repeatUserName 代码
    }

    render() {
        const { username, email, password, passwordConfirmation, errors } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <h1>Join our community</h1>
                    <div className="form-group">
                        <label className="control-label">Username</label>
                        <input
                            className={classnames('form-control', { 'is-invalid': errors.username })}
                            type="text"
                            name="username"
                            value={username}
                            onChange={this.changeHandle}
                            onBlur={this.onBlurCheckUserName}
                        />
                        {errors.username && <span style={{ color: 'red', fontSize: '10px' }}>{errors.username}</span>}
                    </div>
                    <div className="form-group">
                        <label className="control-label">Email</label>
                        <input
                            className={classnames('form-control', { 'is-invalid': errors.email })}
                            type="text"
                            name="email"
                            value={email}
                            onChange={this.changeHandle}
                        />
                        {errors.email && <span style={{ color: 'red', fontSize: '10px' }}>{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label className="control-label">PassWord</label>
                        <input
                            className={classnames('form-control', { 'is-invalid': errors.password })}
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.changeHandle}
                        />
                        {errors.password && <span style={{ color: 'red', fontSize: '10px' }}>{errors.password}</span>}
                    </div>
                    <div className="form-group">
                        <label className="control-label">passwordConfirmation</label>
                        <input
                            className={classnames('form-control', { 'is-invalid': errors.passwordConfirmation })}
                            type="password"
                            name="passwordConfirmation"
                            value={passwordConfirmation}
                            onChange={this.changeHandle}
                        />
                        {errors.passwordConfirmation && <span style={{ color: 'red', fontSize: '10px' }}>{errors.passwordConfirmation}</span>}
                    </div>
                    <div className="form-group">
                        {
                            Object.keys(errors).length > 0 ?
                            <button disabled className="btn btn-primary btn-lg">注册</button>
                            :
                            <button className="btn btn-primary btn-lg">注册</button>
                        }
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(SignUpForm)